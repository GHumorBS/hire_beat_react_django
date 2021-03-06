import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogGrid from './BlogGridHome';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class Blog extends Component {
    render() {
        return (
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog" 
                    pageDescription="News and Insights" 
                />
                <BlogGrid />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default Blog;