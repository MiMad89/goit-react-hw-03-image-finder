import React, { Component } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { fetchImagesWithQuery } from 'serwices';
import { LoadMoreButton } from './Button';
import { Loader } from './Loader';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    searchQuery: '',
    error: null,
    isLoading: false,
    hasMore: true,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.searchQuery !== prevState.searchQuery ||
      this.state.page !== prevState.page
    ) {
      try {
        this.setState({ isLoading: true });

        const images = await fetchImagesWithQuery(
          this.state.searchQuery,
          this.state.page
        );

        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          hasMore: images.length > 0,
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSearch = query => {
    this.setState({ images: [], searchQuery: query, page: 1, hasMore: true });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, hasMore, isLoading } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={images} />
        {isLoading && <Loader />}
        {!isLoading && images.length > 0 && hasMore && (
          <LoadMoreButton onClick={this.handleLoadMore} />
        )}
      </div>
    );
  }
}
