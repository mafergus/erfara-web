import React, {Component, PropTypes} from 'react';
import HomeFeature from './HomeFeature';
import FullWidthSection from './FullWidthSection';
import RaisedButton from 'material-ui/RaisedButton';
import withWidth, {LARGE} from 'material-ui/utils/withWidth';
import spacing from 'material-ui/styles/spacing';
import typography from 'material-ui/styles/typography';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {cyan500, grey200, darkWhite, orange500} from 'material-ui/styles/colors';

class HomePage extends Component {

  static propTypes = {
    width: PropTypes.number.isRequired,
  };

  static contextTypes = {
    router: PropTypes.object,
  };

  homePageHero() {
    const styles = {
      root: {
        backgroundColor: cyan500,
        overflow: 'hidden',
        minHeight: '500px',
      },
      svgLogo: {
        marginLeft: window.innerWidth * 0.5 - 130,
        width: 420,
        height: 157,
      },
      tagline: {
        margin: '16px auto 0 auto',
        textAlign: 'center',
        maxWidth: 575,
      },
      label: {
        color: lightBaseTheme.palette.primary1Color,
      },
      githubStyle: {
        margin: '16px 32px 0px 8px',
      },
      h1: {
        fontSize: '1.5em',
        color: darkWhite,
        fontWeight: typography.fontWeightLight,
      },
      h2: {
        fontSize: '1em',
        lineHeight: '28px',
        marginTop: '1.5em',
        marginBottom: '5em',
        letterSpacing: 0,
      },
      nowrap: {
        whiteSpace: 'nowrap',
      },
      taglineWhenLarge: {
        marginTop: 32,
      },
      h1WhenLarge: {
        fontSize: '2em',
      },
      h2WhenLarge: {
        fontSize: '1.5em',
        lineHeight: '32px',
        paddingTop: 16,
        marginBottom: 12,
      },
    };

    styles.h2 = Object.assign({}, styles.h1, styles.h2);

    if (this.props.width === LARGE) {
      styles.tagline = Object.assign({}, styles.tagline, styles.taglineWhenLarge);
      styles.h1 = Object.assign({}, styles.h1, styles.h1WhenLarge);
      styles.h2 = Object.assign({}, styles.h2, styles.h2WhenLarge);
    }

    return (
      <FullWidthSection style={styles.root} className="heroImage">
        <div style={styles.tagline}>
          <h1 style={styles.h1}>Learn. Teach. Experience.</h1>
          <h2 style={styles.h2}>
            Erfara is the world's first community built around sharing skills. You share something you're good at, and in return people share with you
          </h2>
          <RaisedButton
            className="demo-button"
            style={{marginTop: '100px'}}
            label="Join"
            onTouchTap={this.handleTouchTapDemo}
            buttonStyle={{width: '5em'}}
          />
        </div>
      </FullWidthSection>
    );
  }

  homeFeatures() {
    const styles = {maxWidth: 906};

    return (
      <FullWidthSection useContent={true} contentStyle={styles}>
        <HomeFeature
          heading="Get Started"
          route="/get-started"
          imageClass="getStartedImage"
          firstChild={true}
        />
        <HomeFeature
          heading="Customization"
          route="/customization"
          imageClass="customizationImage"
        />
        <HomeFeature
          heading="Components"
          route="/components"
          imageClass="componentsImage"
          lastChild={true}
        />
      </FullWidthSection>
    );
  }

  homeContribute() {
    const styles = {
      root: {
        backgroundColor: grey200,
        textAlign: 'center',
      },
      h3: {
        margin: 0,
        padding: 0,
        fontWeight: typography.fontWeightLight,
        fontSize: 22,
      },
      button: {
        marginTop: 32,
      },
    };

    return (
      <FullWidthSection useContent={true} style={styles.root}>
        <h3 style={styles.h3}>
          Want to help make this <span style={styles.nowrap}>project awesome? </span>
          <span style={styles.nowrap}>Check out our repo.</span>
        </h3>
        <RaisedButton
          label="GitHub"
          primary={true}
          href="https://github.com/callemall/material-ui"
          style={styles.button}
        />
      </FullWidthSection>
    );
  }

  handleTouchTapDemo = () => {
    alert("PLEASEEE");
    this.context.router.push('/components');
  };

  render() {
    const style = {
      paddingTop: spacing.desktopKeylineIncrement,
    };

    return (
      <div style={style}>
        {this.homePageHero()}
        {this.homeFeatures()}
        {this.homeContribute()}
      </div>
    );
  }
}

export default withWidth()(HomePage);
