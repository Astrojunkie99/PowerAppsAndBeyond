import React from "react";
import Layout from "../layout";
import { Link } from "gatsby";
import kebabCase from "lodash.kebabcase";
import style from "../../styles/tagspage.module.scss";

const TagsPage = ({ pageContext}) => {
    const { tags, tagPostCounts } = pageContext;
    return (
    <Layout>
        <h1 className="displayHeading">Tags</h1>
        <div>
            {tags.map(tag => (
                <div className={style.container}>
                    <button className={style.tagButton} type="button" key={tag}><Link style={{textDecoration: 'none', color:'black', backgroundColor:'transparent'}} activeStyle={{color: 'none'}} to={`/tags/${kebabCase(tag)}/`}>
                        {tag} <button type="button" className="chip">{tagPostCounts[tag]}</button></Link>
                    </button>
                </div>
            ))}
        </div>
    </Layout>
    )
}

export default TagsPage