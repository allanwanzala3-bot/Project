<template>
  <section class="page">
    <h2>Academic Background</h2>

    <div class="education-list">
      <article class="card">
        <p class="level">Postgraduate</p>
        <h3>Master of Business Administration</h3>
        <p class="meta">Jomo Kenyatta University of Agriculture and Technology, Nairobi, Kenya</p>
        <p class="years">2015 – 2017</p>
      </article>

      <article class="card">
        <p class="level">Postgraduate</p>
        <h3>Master of Science in Mobile Innovation and Technology</h3>
        <p class="meta">Strathmore University, Nairobi, Kenya</p>
        <p class="years">2012 – 2015</p>
      </article>

      <article class="card">
        <p class="level">Undergraduate</p>
        <h3>Bachelor of Science in Electrical and Electronic Engineering</h3>
        <p class="meta">Jomo Kenyatta University of Agriculture and Technology, Nairobi, Kenya</p>
        <p class="years">2005 – 2010</p>
      </article>

      <article class="card">
        <p class="level">Secondary</p>
        <h3>Kenya Certificate of Secondary Education</h3>
        <p class="meta">Alliance High School, Nairobi, Kenya</p>
        <p class="years">2000 – 2003</p>
      </article>

      <article class="card">
        <p class="level">Primary</p>
        <h3>Kenya Certificate of Primary Education</h3>
        <p class="meta">Busia Township Primary School, Busia, Kenya</p>
        <p class="years">1994 – 2000</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.page {
  padding: 2rem;
}

.education-list {
  display: grid;
  gap: 1.25rem;
}

.card {
  background: white;
  padding: 1.2rem 1.4rem;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.06);
  border-left: 4px solid #2563eb;
}

.level {
  margin: 0 0 0.45rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #2563eb;
  font-size: 0.8rem;
  font-weight: 700;
}

h3 {
  margin: 0 0 0.4rem;
}

.meta {
  color: #64748b;
  font-weight: 600;
  margin: 0 0 0.25rem;
}

.years {
  color: #334155;
  margin: 0;
}
</style>