import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DialogDemo() {
  const hellow = () => {
    console.log("called");
  };
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            className="px-3 py-2  font-inter2 text-white bg-black rounded-full border-3 border-white"
            variant="outline"
          >
            Hire Me
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Your Information </DialogTitle>
            <DialogDescription>
              Kindly share your email address so I can reconnect with you and
              continue our conversation.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email-1">Email</Label>
              <Input id="email-1" name="email" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                variant="outline"
                className="px-6 rounded-full border-2 
             hover:bg-red-50 hover:border-red-500 hover:text-red-600
               hover:scale-105 hover:shadow-lg hover:shadow-red-200
              active:scale-95
              transition-all duration-300 ease-out
                group relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <i className="ri-close-circle-line group-hover:rotate-90 transition-transform duration-300"></i>
                  Cancel
                </span>
                <span className="absolute inset-0 bg-red-100 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
              </Button>
            </DialogClose>
            <Button
              onClick={hellow}
              className="px-6 py-2.5 font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full border-0
                hover:scale-110 hover:rotate-1 hover:shadow-2xl hover:shadow-purple-500/50
                active:scale-95 active:rotate-0
                transition-all duration-300 ease-out
                group relative overflow-hidden
                animate-gradient bg-[length:200%_200%]"
              type="submit"
            >
              <span className="relative z-10 flex items-center gap-2 group-hover:animate-pulse">
                <i className="ri-send-plane-fill group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></i>
                Send Message
                <i className="ri-sparkling-line group-hover:rotate-180 transition-transform duration-500"></i>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></span>
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
