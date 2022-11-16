import React from 'react'
import {Button,
    Radio,
    FormControlLabel,
    RadioGroup,
    Typography} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const BuscarVuelosForm = () => {
    return (
        <div container>
          <div className=" ">
            <RadioGroup row onChange={handleSelectTrip} value={selectTrip}>
              <FormControlLabel
                value="one"
                control={<Radio color="primary" />}
                label="One Way"
              />
              <FormControlLabel
                value="both"
                control={<Radio color="primary" />}
                label="Round Trip"
              />
            </RadioGroup>
          </div>

          <div className=" ">
            <Autocomplete
              value={source}
              inputValue={inputSource}
              onChange={(event, newValue) => {
                handleSource(newValue);
              }}
              onInputChange={(event, newInputValue) => {
                setInputSource(newInputValue);
              }}
              getOptionLabel={(option) => option.name}
              options={cities}
              style={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Source City" variant="outlined" />
              )}
            />
          </div>
          <div className=" ">
            <Autocomplete
              value={dest}
              inputValue={inputDest}
              onChange={(event, newValue) => {
                handleDestination(newValue);
              }}
              onInputChange={(event, newInputValue) => {
                setInputDest(newInputValue);
              }}
              getOptionLabel={(option) => option.name}
              options={cities}
              style={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Destination City"
                  variant="outlined"
                />
              )}
            />
          </div>
          <div className=" ">
            <TextField
              label="Journey Date"
              type="date"
              value={deptDate}
              onChange={handleDeparture}
              variant="outlined"
              style={{ width: 300 }}
              InputLabelProps={{
                shrink: true
              }}
            />
          </div>
          {selectTrip?.toUpperCase() === "BOTH" && (
            <div   className=" ">
              <TextField
                label="Return Date"
                type="date"
                value={returnDate}
                onChange={handleReturn}
                variant="outlined"
                style={{ width: 300 }}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </div>
          )}
          <div item xs={12}>
            <Button
              variant="contained"
              color="primary"
              className=" "
              onClick={handleSearchFlight}
              disabled={validateSearch(
                source,
                dest,
                deptDate,
                returnDate,
                selectTrip
              )}
            >
              {`Search Flight`}
            </Button>
          </div>
          <div item xs={12}>
            {cityError && (
              <Typography
                variant="body1"
                color="error"
              >{`Source and Destination City can not be same`}</Typography>
            )}
            {searchDone && (
              <FlightListOneWay flightList={flightList} bookNow={handleBookNow} />
            )}
          </div>
        </div>
      );
    };

export default BuscarVuelosForm