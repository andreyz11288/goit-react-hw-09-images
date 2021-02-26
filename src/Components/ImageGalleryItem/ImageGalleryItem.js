import { useEffect, useRef, useState } from 'react';
import s from './ImageGalleryItem.module.css';
import Loaders from '../Loader/Loader';
import Api from '../Api/Api';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({
  onFetch,
  visible,
  numberPage,
  resPage,
  largeImageURL,
}) {
  const [gallery, setGallery] = useState([]);
  // const [error, setError] = useState()
  const [status, setStatus] = useState('idle');

  // state = {
  //   gallery: [],
  //   error: null,
  //   status: 'idle',
  // };

  const prevStateStatus = useRef(status);
  const prevPropsOnFetch = useRef(onFetch);
  const prevPropsNumberPage = useRef(numberPage);
  useEffect(() => {
    let thisPage = 1;

    if (onFetch === '' && prevStateStatus.current !== status) {
      console.log('1');
      setStatus('idle');
      visible(true);
    }
    if (
      prevPropsOnFetch.current !== onFetch &&
      prevPropsNumberPage.current === numberPage
    ) {
      console.log('2');
      setGallery([]);
      // setStatus( 'pending' );
      visible(true);
      resPage(true);

      Api(onFetch, thisPage)
        .then(e => {
          setGallery(e.hits);
          visible(false);
          if (e.hits.length === 0) {
            visible(true);
            return setStatus('rejected');
          }
          setStatus('resolve');
        })
        .catch(() => setStatus('rejected'));
    }
    if (
      prevPropsOnFetch.current === onFetch &&
      prevPropsNumberPage.current < numberPage
    ) {
      console.log('3');
      thisPage = numberPage;
      Api(onFetch, thisPage)
        .then(e => {
          // const { gallery } = this.state;
          setGallery([...gallery, ...e.hits]);
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
          visible(false);
          if (e.hits.length === 0) {
            visible(true);
          }
          setStatus('resolve');
        })
        .catch(() => setStatus('rejected'));
    }
  }, [gallery, numberPage, onFetch, resPage, status, visible]);

  // const componentDidUpdate(prevProps, prevState) {
  // let thisPage = 1;

  // if (this.props.onFetch === '' && prevState.status !== this.state.status) {
  //   this.setState({ status: 'idle' });
  //   this.props.visible(true);
  // }
  // if (
  //   prevProps.onFetch !== this.props.onFetch &&
  //   prevProps.numberPage === this.props.numberPage
  // ) {
  //   this.setState({ gallery: [] });
  //   this.setState({ status: 'pending' });
  //   this.props.visible(true);
  //   this.props.resPage(true);

  //   Api(this.props.onFetch, thisPage)
  //     .then(e => {
  //       this.setState({ gallery: e.hits });
  //       this.props.visible(false);
  //       if (e.hits.length === 0) {
  //         this.props.visible(true);
  //         return this.setState({ status: 'rejected' });
  //       }
  //       this.setState({ status: 'resolve' });
  //     })
  //     .catch(() => this.setState({ status: 'rejected' }));
  // }
  // if (
  //   prevProps.onFetch === this.props.onFetch &&
  //   prevProps.numberPage < this.props.numberPage
  // ) {
  //   thisPage = this.props.numberPage;
  //   Api(this.props.onFetch, thisPage)
  //     .then(e => {
  //       const { gallery } = this.state;
  //       this.setState({ gallery: [...gallery, ...e.hits] });
  //       window.scrollTo({
  //         top: document.documentElement.scrollHeight,
  //         behavior: 'smooth',
  //       });
  //       this.props.visible(false);
  //       if (e.hits.length === 0) {
  //         this.props.visible(true);
  //       }
  //       this.setState({ status: 'resolve' });
  //     })
  //     .catch(() => this.setState({ status: 'rejected' }));
  // }
  // }

  // const { status, gallery } = this.state;

  if (status === 'idle') {
    return (
      <li>
        <h1>Введите запрос</h1>
      </li>
    );
  }

  if (status === 'rejected') {
    return (
      <li>
        <h1>Запрос не найден</h1>
      </li>
    );
  }
  if (status === 'pending') {
    return (
      <li>
        <Loaders />
      </li>
    );
  }

  if (status === 'resolve') {
    return gallery.map(e => (
      <li key={e.id} className={s.ImageGalleryItem}>
        <img
          src={e.webformatURL}
          data-src={e.largeImageURL}
          alt="img"
          className={s.ImageGalleryItemImage}
          onClick={() => largeImageURL(e.largeImageURL)}
        />
      </li>
    ));
  }
}
ImageGalleryItem.propTypes = {
  visible: PropTypes.func.isRequired,
  resPage: PropTypes.func.isRequired,
  largeImageURL: PropTypes.func.isRequired,
  numberPage: PropTypes.number.isRequired,
  onFetch: PropTypes.string,
};
