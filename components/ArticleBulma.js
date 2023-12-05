import Appbare from '../components/Appbare.js'
import Container from '../components/Container.js'
import Card from '../components/Card'
import Link from '@mui/material/Link';
import Video from '../components/Video'
import Image from 'next/image'
// import Logo from '../images/logoceducaty.jpg'
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import CardBulma from '../components/CardBulma'

import {
    Grid
} from '@material-ui/core';
import NavBarBulma from '../components/NavBarBulma'

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function ArticleBulma() {
    return (
        <>
            <article className="media">
                <figure className="media-left">
                    <p className="image is-64x64">
                        {/* <img src="https://bulma.io/images/placeholders/128x128.png"/> */}
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                            <br/>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        </p>
                    </div>
                    <nav className="level is-mobile">
                        <div className="level-left">
                            <a className="level-item">
                                <span className="icon is-small"><i className="fas fa-reply"></i></span>
                            </a>
                            <a className="level-item">
                                <span className="icon is-small"><i className="fas fa-retweet"></i></span>
                            </a>
                            <a className="level-item">
                                <span className="icon is-small"><i className="fas fa-heart"></i></span>
                            </a>
                        </div>
                    </nav>
                </div>
                <div className="media-right">
                    <button className="delete"></button>
                </div>
            </article>
        </>
    )
}

export default ArticleBulma