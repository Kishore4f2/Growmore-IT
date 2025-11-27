import React from 'react';
import './BlogPreview.css';

const posts = [
  { title: 'Publishments and News', desc: 'Latest updates from the team', tag: 'Update' },
  { title: 'Designing a Human Network', desc: 'Principles behind proof of personhood', tag: 'Design' },
  { title: 'Building with Low‑Code SDK', desc: 'Faster identity and AI integration', tag: 'Developers' }
];

const BlogPreview = () => {
  return (
    <section className="bp-wrap">
      <div className="bp-head">
        <h2 className="section-title">Publishments and News</h2>
        <button className="btn btn-primary">See More →</button>
      </div>
      <div className="bp-grid">
        {posts.map((p, i) => (
          <article key={i} className="bp-card reveal">
            <div className="bp-tag">{p.tag}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogPreview;


