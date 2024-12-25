type Props = {
    isOpen: boolean;
    onClose: () => void;
    onDelete: () => void;
    itemData?: string;
  }
  
  const DeleteConfirmation = ({
    isOpen,
    onClose,
    onDelete,
    itemData = 'item'
  }: Props) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-50">
        {/* Overlay */}
        <div 
          className="fixed inset-0 bg-black/30" 
          onClick={onClose}
        />
        
        {/* Modal */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">
                Delete {itemData}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500"
              >
                ✕
              </button>
            </div>
  
            <p className="mt-2 text-sm text-gray-500">
              Are you sure you want to delete this {itemData}? This action cannot be undone.
            </p>
  
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={onClose}
                className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onDelete();
                  onClose();
                }}
                className="flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default DeleteConfirmation;