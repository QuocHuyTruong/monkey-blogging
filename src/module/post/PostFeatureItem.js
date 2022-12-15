import { db } from "firebase-app/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import slugify from "slugify";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";
const PostFeatureItemStyles = styled.div`
  width: 100%;
  border-radius: 16px;
  position: relative;
  height: 169px;
  .post {
    &-image {
      width: 100%;
      height: 100%;
      border-radius: 16px;
    }
    &-overlay {
      position: absolute;
      inset: 0;
      border-radius: 16px;
      background-color: rgba(0, 0, 0, 0.75);
      mix-blend-mode: multiply;
      opacity: 0.6;
    }
    &-content {
      position: absolute;
      inset: 0;
      z-index: 10;
      padding: 20px;
      color: white;
    }
    &-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }
  }

  @media screen and (min-width: 1024px) {
    height: 272px;
  }
  @media screen and (max-width: 1023.98px) {
    .post {
      &-content {
        padding: 15px;
      }
    }
  }
`;
const PostFeatureItem = ({ data }) => {
  console.log(data);
  if (!data || !data.id) return null;
  // console.log(user);
  const date = data?.createAt?.seconds
    ? new Date(data.createAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");
  return (
    <PostFeatureItemStyles>
      <PostImage url={data.image} alt="unsplash"></PostImage>
      <div className="post-overlay"></div>
      <div className="post-content">
        <div className="post-top">
          {data.category?.name && (
            <PostCategory to={data.category.slug}>
              {data.category.name}
            </PostCategory>
          )}
          <PostMeta
            to={slugify(data.user?.fullname || "", { lower: true })}
            authorName={data.user?.fullname}
            date={formatDate}
          ></PostMeta>
        </div>
        <PostTitle size="big" to={data.slug}>
          {data.title}
        </PostTitle>
      </div>
    </PostFeatureItemStyles>
  );
};

export default PostFeatureItem;
