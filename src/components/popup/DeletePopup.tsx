// import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogTitle } from "@/components/ui/dialog";
import { DeleteIcon } from "lucide-react";
interface DialogDemoProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  data: {title: string, details: string, button: string};
}

export function DialogDemo({ isOpen, onOpenChange, data }: DialogDemoProps) {
//   const router = useRouter();

  const handleClick = () => {
    // onOpenChange(false); // Close the dialog
    // data.title === "New EventCreator"? 
    // router.push("/authentication/add-event"): router.push("/dashboard")
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] ">
        <DialogTitle className="flex flex-col gap-[53px] items-center mx-auto text-center justify-center">
          <div>
            <DeleteIcon/>
          </div>
          <div className="space-y-[10px]">
            <h4 className="text-[20px] font-medium">{data.title}</h4>
            <p className="text-[#919BA7] font-medium">
            {data.details}
            </p>
          </div>
        </DialogTitle>
        <DialogFooter className="mx-auto text-center mt-[10px] w-[80%]">
          <Button
            onClick={handleClick}
            type="submit"
            className={ data.title === "New EventCreator" ? "flex text-white w-full bg-success300" :"flex text-white w-full bg-secondary"}
          >
            {data.button}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}