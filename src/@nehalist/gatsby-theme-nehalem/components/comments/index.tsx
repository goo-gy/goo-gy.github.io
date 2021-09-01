import React, {FunctionComponent} from "react";
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

/**
 * Placeholder which is attached under every post. Can be shadowed to
 * quickly integrate comments (like commento, Disqus, ...).
 */
// @ts-ignore
const Comments: FunctionComponent<{ id: string }> = ({id}) => {
  let disqusConfig = {
    identifier: id,
  }
  return (
    <>
      <CommentCount config={disqusConfig} placeholder={'...'} />
      <Disqus config={disqusConfig} />
    </>
)};

export default Comments;