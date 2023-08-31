import logo from './logo.svg';
import './App.css';

// function App() {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 			</header>
// 		</div>
// 	);
// }

function App() {
	return (
		<div className="App">
			<header className="forecast-wrapper">
				<h1 name="intro">Welcome to my minimalist weather app!</h1>
				<i>~Powered by Open Weather API~</i>
				<p>Your City:</p>
			</header>
			<nav>
				<div id="city-input">
					<form onsubmit="return false">
						<input
							type="text"
							class="input-fields"
							id="my-city"
							placeholder="city"
							name="city"
						/>
						<input
							type="text"
							class="input-fields"
							id="state-code"
							placeholder="state eg: AL"
							name="state"
						/>
						<select id="country-code">
							<option value="USA">USA</option>
						</select>
						<button
							id="get-weather-button"
							type="button"
							class="buttons"
						>
							<span>Submit</span>
						</button>
					</form>
				</div>
				<div id="forecast-buttons" class="hidden">
					<form onsubmit="return false">
						<button
							id="current-weather-btn"
							type="button"
							class="buttons"
						>
							<span>Current</span>
						</button>
						<button
							id="hourly-weather-btn"
							type="button"
							class="buttons"
						>
							<span>Hourly</span>
						</button>
						<button
							id="week-weather-btn"
							type="button"
							class="buttons"
						>
							<span>One Week</span>
						</button>
					</form>
				</div>
			</nav>
			<div id="forecast-wrapper">
				<div id="current-weather-wrapper" class="hidden">
					{/* <div id="current-weather" class="forecast-boxes">
					<p id="current-weather-text">The weather in ${myCity} is currently ${currWeatherDescription} at ${currTemp} &deg;F.</p>
					<img id="current-weather-img" src="${currIcon}" />
				</div> */}
				</div>
				<div id="hourly-forecast-wrapper" class="hidden">
					{/* <div class="forecast-boxes hourly-forecast">
					<p class="hourly-forecast-text">
						${hour[i]} ${hourlyWeatherDescription[i]}<br> at ${hourlyTemp[i]} &deg;F
					</p>
					<img class="hourly-img" src="${hourlyIcon[i]}" />
				</div> */}
				</div>
				<div id="one-week-forecast-wrapper" class="hidden">
					{/* <div class="forecast-boxes one-week-forecast">
					<p class="one-week-forecast-text">
						${dayOfWeek[i]} ${weekWeatherDescription[i]}<br> at ${dayTempHigh[i]} / ${dayTempLow[i]} &deg;F</p>
					<img class="one-week-img" src="${weekIcon[i]}" />
				</div> */}
				</div>
				<div id="error-message" class="forecast-boxes hidden">
					<p id="error-message-text">INVALID INPUT</p>
					<p id="error-message-text">Please try again!</p>
				</div>
			</div>
		</div>
	);
}

export default App;
