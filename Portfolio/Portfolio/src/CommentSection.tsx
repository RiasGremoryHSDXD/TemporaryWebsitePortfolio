import { useState, useEffect } from "react";
import supabase from "./supabaseClient";

function CommentSection() {
  const [comments, setComments] = useState<any[]>([]);
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Prevent double submission

  // Fetch comments on load
  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from("comment_table")
        .select("*")
        .order("create_at", { ascending: false });

      if (error) console.error("Error fetching comments:", error);
      else setComments(data);
    };

    fetchComments();
  }, []);

  // Add new comment
  const addComment = async () => {
    if (!newComment.trim() || isSubmitting) return; // Prevent empty or duplicate submissions

    setIsSubmitting(true); // Disable further clicks

    const { data, error } = await supabase
      .from("comment_table")
      .insert([{ comment: newComment }])
      .select()
      .single();

    if (error) {
      console.error("Error adding comment:", error);
    } else {
      setComments([data, ...comments]);
      setNewComment("");
    }

    setIsSubmitting(false); // Re-enable button after request completes
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Comments</h2>

      {/* Input Section */}
      <div className="flex items-center gap-2 sm:flex-row flex-col mb-4">
        <input
          type="text"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="flex-1 p-2 border sm:w-0 w-[100%] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addComment}
          disabled={isSubmitting} // Disable button while submitting
          className={`${
            isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          } sm:w-[20%] w-[100%] text-white px-4 py-2 rounded-lg transition`}
        >
          {isSubmitting ? "Posting..." : "Post"}
        </button>
      </div>

      {/* Comments List */}
      <div className="space-y-3">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="p-3 bg-gray-100 rounded-lg shadow-sm">
              <p className="text-gray-700">{comment.comment}</p>
              <small className="text-gray-500">
                {new Date(comment.create_at).toLocaleString()}
              </small>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
}

export default CommentSection;
