export default function(site) {
  return `
    <header>
      <div>
        <a href="/">
          <div class="logo">${site.title}</div>
        </a>
      </div>

      <div>
        <nav>
          <ul>
            <li>
              <a href="/posts">~/Posts</a>
            </li>
            <li>
              <a href="/projects">~/Projects</a>
            </li>
            <li>
              <a href="/about">~/About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

  `;
}