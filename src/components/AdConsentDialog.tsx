
import React, { useEffect } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';

const AdConsentDialog: React.FC = () => {
  const { adConsent, setAdConsent } = useAppContext();
  const [open, setOpen] = React.useState(false);

  // Show dialog if consent hasn't been given
  useEffect(() => {
    const timer = setTimeout(() => {
      if (adConsent === false) {
        setOpen(true);
      }
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [adConsent]);

  const handleAccept = () => {
    setAdConsent(true);
    setOpen(false);
  };

  const handleReject = () => {
    // Still set adConsent to true to remember the choice, but would disable personalized ads in a real implementation
    setAdConsent(true);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Personalized Ads</DialogTitle>
          <DialogDescription>
            We use ads to keep this app free. Would you like to see personalized ads based on your interests?
          </DialogDescription>
        </DialogHeader>
        <div className="text-sm space-y-2 my-4">
          <p>
            Personalized ads help us provide this service for free. Your data is handled according to our privacy policy and you can change your preference anytime.
          </p>
        </div>
        <DialogFooter className="flex sm:justify-between">
          <Button variant="outline" onClick={handleReject}>
            No, use basic ads
          </Button>
          <Button onClick={handleAccept}>
            Yes, personalize ads
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AdConsentDialog;
