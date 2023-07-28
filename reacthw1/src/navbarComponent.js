


import React, { Component } from 'react'

export default class NavbarComponent extends Component {
    render() {
        return (
            <nav class="navbar shadow-sm p-3 mb-5 bg-white rounded navbar navbar-expand-md navbar-light bg-light">
                <button type="button" class="btn btn-info">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="align-left"
                        class="svg-inline--fa fa-align-left"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="currentColor"
                            d="M12.83 352h262.34A12.82 12.82 0 0 0 288 339.17v-38.34A12.82 12.82 0 0 0 275.17 288H12.83A12.82 12.82 0 0 0 0 300.83v38.34A12.82 12.82 0 0 0 12.83 352zm0-256h262.34A12.82 12.82 0 0 0 288 83.17V44.83A12.82 12.82 0 0 0 275.17 32H12.83A12.82 12.82 0 0 0 0 44.83v38.34A12.82 12.82 0 0 0 12.83 96zM432 160H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 256H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
                        ></path>
                    </svg>
                </button>
                <button type="button" class="navbar-toggler">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse show navbar-collapse">
                    <ul class="ml-auto navbar-nav">
                        <li class="nav-item"><a class="nav-link" href="/page-1">page 1</a></li>
                        <li class="nav-item"><a class="nav-link" href="/page-2">page 2</a></li>
                        <li class="nav-item"><a class="nav-link" href="/page-3">page 3</a></li>
                        <li class="nav-item"><a class="nav-link" href="/page-4">page 4</a></li>
                    </ul>
                </div>
            </nav>

        )
    }
}