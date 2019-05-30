import React, { Component } from "react";
import { connect } from "react-redux";
import { allMembers } from "../../Actions/index";
import { fetchMembers } from "../../api/apiCalls";
import BandMembers from "../BandMembers/BandMembers";
import "./BandBio.scss";

class BandBio extends Component {
  componentDidMount() {
    this.fetchPhishData();
  }

  fetchPhishData = () => {
    fetchMembers(
      `https://cors-anywhere.herokuapp.com/https://peaceful-castle-66511.herokuapp.com/api/v1/phish/members`
    ).then(results => this.props.allMembers(results));
  };

  renderBandMembers = () => {
    const { members } = this.props;
    return members.map(member => <BandMembers key={member.id} member={member} />);
  };

  render() {
    return (
      <div className="band-bio">
        <div className="band-img" />
        <h2>Brief history of Phish:</h2>
        <section className="phish-history">
          <article className="phish-bio-left">
            <p>
              Phish was formed on the campus of the University of Vermont in
              Burlington in 1983
            </p>
            <p>
              Ernesto Giuseppie “Trey” Anastasio III started playing guitar with
              Jeff Holdsworth. Later that year, Trey met Jon Fishman, whose
              drumming he had heard bellowing through the dorms, and the three
              began practicing together.
            </p>
            <p>
              Later Mike Gordon answered a flyer looking for a bassist and began
              playing with Trey, Jeff, Fishman and another drummer, Marc “Daubs”
              Daubert. Their first gig together went poorly; they were wrongly
              billed as Blackwood Convention for an ROTC Dance in 1983 on the
              UVM campus. They played two songs before being replaced by Michael
              Jackson’s Thriller album on the stereo.
            </p>
            <p>
              By the end of 1984, they had improved and got their first bar gig
              at Nectar’s, the owner of which, Nectar Rorris, is immortalized in
              the name and cover art of the album Picture of Nectar. In 1985
              they met keyboardist Paige McConnell, who was attending nearby
              Goddard College. Over the next year Daubs would move and Jeff
              would drop out of the band and so the modern Phish was born.
            </p>
          </article>
          <article className="phish-bio-center">
            <p>
              Their first studio album, The White Tape, was compiled by Trey,
              Mike, Jon, Jeff, Marc Daubert, Tom Marshall and Page between 1984
              and 1985 and made into a demo. The four modern-day Phish members
              are on the tracks “Alumni Blues” and “Dog Gone Dog” as well as
              concert favorites “AC/DC Bag” and “Slave to the Traffic Light."
            </p>
            <p>
              A good handful of the group’s songs are based on Trey’s senior
              study that resulted in the essay “The Man Who Stepped into
              Yesterday,” a fantasy story about a land called Gamehenge.
              Sometimes the band will play while some of the stories are told by
              Trey. By 1990, they began to create a buzz with their live shows
              and in 1991 they signed with Elektra Records.
            </p>
            <p>
              Phish toured heavily from 1990 to 1994 then began annual breaks.
              In 2004 the band announced it was breaking up and played its
              “final” show at a weekend-long festival in Coventry, Vermont, that
              year, only to get back together in 2009. They and are now touring
              again and producing more studio albums under their own record
              label, JEMP Records.
            </p>
          </article>
          <article className="phish-bio-right">
            <p>
              Phish, by most respects, is a jam band, but to label them is
              difficult because their song choices range across multiple musical
              styles. One song might have the rhythm of reggae as in “Ya Mar,”
              and the next, an acapella version of Lynryd Skynryd’s “Freebird,"
              to experimental with Fishman playing a vacuum to the tune of
              “Somewhere Over the Rainbow,” followed by “Rocky Top," a bluegrass
              jam.
            </p>
            <p>
              Beyond the eclectic variety of their songs is how long they can
              last, with some jams lasting as long as 20 minutes and songs
              weaving in and out of each other. They have released fourteen
              studio albums, but the albums only give a taste of their creative
              prowess. To actually experience Phish, their live shows are the
              way to go. The band has props, a wonderful light shows by Chris
              Kuroda, they get the audience involved and during songs like
              “Harry Hood," often times a glow stick war breaks out.
            </p>
            <p>
              That their live shows are wonderfully entertaining and full of
              energy, it’s no wonder that the Phish following has become similar
              to that of the Grateful Dead, where many concert goers travel from
              city to city following the band on all of their tour dates. A
              traveling circus atmosphere often times means the shows are one
              big dance party with the band creating a funky vibe to keep
              everyone loose and having a good time.
            </p>
          </article>
        </section>
        <h2>Members:</h2>
        <section className="band-members">{this.renderBandMembers()}</section>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  members: state.members
});

export const mapDispatchToProps = dispatch => ({
  allMembers: members => dispatch(allMembers(members))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BandBio);
