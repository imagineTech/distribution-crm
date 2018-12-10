import React from "react";

import ExportDataModal from "./ExportDataModal";
import SignInModal from "./SignInModal";
import FeedbackModal from "./FeedbackModal";
import BoxDetailsModal from "./BoxDetailsModal";

const ModalConductor = props => {
  switch (props.currentModal) {
    case "EXPORT_DATA":
      return <ExportDataModal {...props} />;

    case "SOCIAL_SIGN_IN":
      return <SignInModal {...props} />;

    case "FEEDBACK":
      return <FeedbackModal {...props} />;

    case "EDIT_BOX":
      return <BoxDetailsModal {...props} />;

    default:
      return null;
  }
};

export default ModalConductor;
