import React from 'react';

const Search: React.FC = () => {


  return (
<div className="trip-search-section shape-search-section">
<div className="slider-shape"></div>
<div className="container">
   <div className="trip-search-inner white-bg d-flex">
      <div className="input-group">
         <label> Search Destination* </label>
         <input type="text" name="s" placeholder="Enter Destination"/>
      </div>
      <div className="input-group">
         <label> Pax Number* </label>
         <input type="text" name="s" placeholder="No.of People"/>
      </div>
      <div className="input-group width-col-3">
         <label> Checkin Date* </label>
         <i className="far fa-calendar"></i>
         <input className="input-date-picker" type="text" name="s" placeholder="MM / DD / YY" autoComplete="off" readOnly/>
      </div>
      <div className="input-group width-col-3">
         <label> Checkout Date* </label>
         <i className="far fa-calendar"></i>
         <input className="input-date-picker" type="text" name="s" placeholder="MM / DD / YY" autoComplete="off" readOnly/>
      </div>
      <div className="input-group width-col-3">
         <label className="screen-reader-text"> Search </label>
         <input type="submit" name="travel-search" value="INQUIRE NOW"/>
      </div>
   </div>
</div>
</div>
  );
};

export default Search;