import React, { useState } from "react";
import aiIcon from "../../../assets/ai_icon.png";
import expertIcon from "../../../assets/expert_icon.png";
import { ButtonContainer } from "../../practice/CardComponents";
import { renderQDes, renderSuccessTag, MyModal } from "../DashboardComponents";
import { ExpertReview } from "./ExpertReview";
import { AIReview } from "./AIReview";
import { confirmAlert } from 'react-confirm-alert';

function ReviewStatusButton(props) {
  const [show, setShow] = useState(false);
  var text = "";
  var className = "";

  const [subPage, setSubPage] = useState("status");
  var sendVideoForReview = props.sendVideoForReview;
  var video = props.v;

  // decide expert or ai review type by props.aiReview
  if (props.aiReview) {
    // decide text, className based on review status
    if (props.v.is_ai_reviewed) {
        text = "View AI Result";
        className = "reviewed text-15";
    } else if (!props.v.needed_ai_review) {
        text = "Send For AI Review";
        className = "not-reviewed text-15";
    } else {
        text = "Please Wait for Result";
        className = "under-review text-15 disabled";
    }
  } else {
    if (props.v.is_expert_reviewed) {
        text = "View Expert Result";
        className = "reviewed text-15";
    } else if (!props.v.needed_expert_review) {
        text = "Send For Expert Review";
        className = "not-reviewed text-15";
    } else {
        text = "Please Wait for Result";
        className = "under-review text-15 disabled";
    }
  }

  function reviewToggle() {
    // send for review
    if (text == "Send For AI Review") {
        sendVideoForReview("ai", video.id);
        // pop up
        confirmAlert({
            title: 'Submit Succeed!',
            message: 'Your feedback will be ready within 24 hours.',
            buttons: [
              {
                label: 'OK'
              }
            ]
        });
    }
    else if (text == "Send For Expert Review") {
        sendVideoForReview("expert", video.id);
        // pop up
        confirmAlert({
            title: 'Submit Succeed!',
            message: 'Your feedback will be ready within 24 hours.',
            buttons: [
              {
                label: 'OK'
              }
            ]
        });
    }
    // view result
    else if (text == "View AI Result") {
        setSubPage("ai");
        setShow(true);
    }
    else if (text == "View Expert Result") {
        setSubPage("expert");
        setShow(true);
    }
  }

  return (
    <div>
      {props.aiReview ? (props.v.is_ai_reviewed ? renderSuccessTag("AI Reviewed") : null)
        : (props.v.is_expert_reviewed ? renderSuccessTag("Expert Reviewed") : null)}
      <div className="height-30">
        <button
          onClick={reviewToggle}
          className={className}
          style={{ color: "#FFFFFF", marginBottom: "0px", display: "inline-block", outline: "none", width: "12rem" }}
        >
          {text}
        </button>
      </div>
      <MyVerticallyCenteredModal
        show={show}
        subPage={subPage}
        setSubPage={setSubPage}
        onHide={() => setShow(false)}
        v={props.v}
        sendVideoForReview={props.sendVideoForReview}
      />
    </div>
  );
}

function MyVerticallyCenteredModal(props) {
  const { subPage, setSubPage, v, ...rest } = props;
  return (
    <MyModal {...rest}>
      {subPage == "expert" ? (
        <ExpertReview v={v} setSubPage={setSubPage} />
      ) : (
        <AIReview v={v} setSubPage={setSubPage} />
      )}
    </MyModal>
  );
}

//function ReviewStatus(props) {
//  const [btnClassNameExpert, onTapExpert] = decideClassNameAndOnTap(
//    "expert",
//    props.v,
//    props.sendVideoForReview,
//    props.setSubPage
//  );
//  const [btnClassNameAI, onTapAI] = decideClassNameAndOnTap(
//    "ai",
//    props.v,
//    props.sendVideoForReview,
//    props.setSubPage
//  );
//  var btnTextExpert = "Human Analytics";
//  var btnTextAI = "AI Data Analytics";
//  return (
//    <div className="container height-400">
//      <div className="d-flex flex-column justify-content-center align-items-center">
//        <p className="text-secondary">Create Your Interview Result</p>
//        <h3 className="h3" style={{ fontSize: "40px", fontWeight: "normal"}}>
//          Choose Analysis Method
//        </h3>
//        <p className="review-text">
//          Q:{renderQDes(props.v.q_description)}
//        </p>
//      </div>
//      <div className="row setup-card-row-bottom">
//        {ButtonContainer(
//          expertIcon,
//          onTapExpert,
//          btnTextExpert,
//          btnClassNameExpert
//        )}
//        {ButtonContainer(aiIcon, onTapAI, btnTextAI, btnClassNameAI)}
//      </div>
//    </div>
//  );
//}
//
//function decideClassNameAndOnTap(type, v, sendVideoForReview, setSubPage) {
//  // returns a tuple [btnClassName, onTap]
//  if (type == "expert") {
//    if (v.is_expert_reviewed) {
//      return ["btn btn-success", () => setSubPage("expert")];
//    } else if (v.needed_expert_review) {
//      return ["btn btn-warning disabled", null];
//    } else {
//      return ["btn btn-warning", () => sendVideoForReview("expert", v.id)];
//    }
//  } else {
//    // ai
//    if (v.is_ai_reviewed) {
//      return ["btn btn-success", () => setSubPage("ai")];
//    } else if (v.needed_ai_review) {
//      return ["btn btn-warning disabled", null];
//    } else {
//      return ["btn btn-warning", () => sendVideoForReview("ai", v.id)];
//    }
//  }
//}

export default ReviewStatusButton;
