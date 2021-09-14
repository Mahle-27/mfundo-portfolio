interface BlogCardProps {
	id: number;
}

const BlogCard: React.FC<BlogCardProps> = () => (
		<li className="flex flex-col justify-between p-10 text-white rounded-lg hover:shadow-xl max-w-prose bg-gradient-to-tr from-green-400 via-green-600 to-green-700 h-60">
			<header className="font-serif text-3xl font-thin">Lorem ipsum dolor sit amet consectetur.</header>
			<footer className="flex items-end justify-between">
				<ul className="flex flex-row space-x-1">
					<li className="w-10 h-10 p-2 bg-green-100 border border-green-600 rounded-full shadow">
						<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
							<polygon fill="#E44D26" points="3.345 21.601 1.419 0 22.581 0 20.653 21.598 11.987 24 3.345 21.601" />
							<polygon fill="#F16529" points="12 22.164 19.002 20.222 20.65 1.766 12 1.766" />
							<path
								fill="#EBEBEB"
								d="M12,9.778H8.495L8.252,7.065H12v-2.65H5.357l0.063,0.711l0.651,7.3H12V9.778L12,9.778z M12,16.658l-0.012,0.003l-2.95-0.797l-0.189-2.113H6.19l0.371,4.16l5.427,1.507L12,19.414V16.658L12,16.658z"
							/>
							<path
								fill="#FFF"
								d="M11.991,9.778v2.649h3.263l-0.308,3.436l-2.955,0.797v2.756l5.431-1.505l0.04-0.448l0.623-6.974l0.064-0.712h-0.714H11.991L11.991,9.778z M11.991,4.415v2.65h6.399l0.053-0.596l0.121-1.343l0.063-0.711H11.991L11.991,4.415z"
							/>
							<polygon fill="#DEDEDE" points="12 23.996 11.987 24 12 24 12 23.996" />
							<path
								fill="#C64321"
								d="M12,7.065L12,7.065H8.252l0.242,2.713h3.496H12V7.065L12,7.065z M12,0H1.419l1.926,21.601L11.987,24L12,23.996v-4.582v0l-0.012,0.004l-5.427-1.507l-0.371-4.16h2.659l0.189,2.113l2.95,0.797l0.003-0.001v0L12,16.658v-4.231H6.071l-0.651-7.3L5.357,4.415h6.634H12V0L12,0z"
							/>
							<path
								fill="#CDCDCD"
								d="M8.849,13.751H6.19l0.371,4.16l5.427,1.507L12,19.414v0l-0.009,0.002v-2.756l-0.003,0.001l-2.95-0.797L8.849,13.751L8.849,13.751z M11.991,4.415H5.357l0.063,0.711l0.651,7.3H12h-0.009V9.778H8.495L8.252,7.065H12h-0.009V4.415L11.991,4.415z"
							/>
							<path
								fill="#DEDEDE"
								d="M12,16.658l-0.009,0.002v0v2.756L12,19.414V16.658L12,16.658z M12,9.778h-0.009v2.649H12V9.778L12,9.778z M12,4.415h-0.009v2.65H12V4.415L12,4.415z"
							/>
						</svg>
					</li>
					<li className="w-10 h-10 p-2 bg-green-100 border border-green-600 rounded-full shadow">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
							<path fill="#2196F3" d="M1 0l1.275 14.4L8 16l5.723-1.599L15 0z" />
							<path
								fill="#FAFAFA"
								d="M12.274 4.709l-.161 1.809-.486 5.423L8 12.944l-.003.001-3.625-1.004-.253-2.836h1.776l.132 1.471 1.971.532.001-.001 1.974-.532.269-2.451-6.208.017-.176-1.676 6.533-.077.132-1.794-6.84.019-.115-1.669h8.864z"
							/>
						</svg>
					</li>
					<li className="w-10 h-10 p-2 bg-green-100 border border-green-600 rounded-full shadow">
						<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
							<path
								fill="#53C1DE"
								d="M12,9.852c-1.186,0-2.147,0.961-2.147,2.147c0,1.185,0.961,2.146,2.147,2.146c1.186,0,2.147-0.961,2.147-2.146C14.147,10.812,13.186,9.852,12,9.852L12,9.852z"
							/>
							<path
								fill="#53C1DE"
								d="M4.514,15.801c0.211,0.069,0.422,0.141,0.638,0.201c-0.07,0.281-0.131,0.559-0.188,0.845c-0.491,2.602-0.108,4.663,1.12,5.371c1.266,0.731,3.395-0.019,5.467-1.833c0.163-0.145,0.328-0.295,0.491-0.455c0.206,0.202,0.422,0.395,0.637,0.581c2.006,1.724,3.989,2.423,5.213,1.716c1.266-0.73,1.678-2.947,1.144-5.647c-0.042-0.206-0.089-0.417-0.141-0.633c0.15-0.042,0.295-0.089,0.441-0.135C22.041,14.916,24,13.467,24,11.98c0-1.42-1.847-2.798-4.397-3.675V8.305c-0.253-0.084-0.506-0.164-0.759-0.239c0.042-0.173,0.08-0.348,0.117-0.521c0.577-2.793,0.197-5.038-1.083-5.779c-1.233-0.708-3.244,0.028-5.278,1.8c-0.202,0.173-0.398,0.357-0.586,0.539c-0.127-0.122-0.258-0.244-0.389-0.361C9.492,1.851,7.355,1.054,6.075,1.8C4.847,2.513,4.481,4.627,4.997,7.27c0.052,0.263,0.108,0.52,0.173,0.782c-0.3,0.084-0.595,0.179-0.872,0.278C1.795,9.196,0,10.564,0,11.98C0,13.443,1.912,14.91,4.514,15.801L4.514,15.801z M10.889,19.62c-0.773,0.708-1.669,1.269-2.644,1.654c-0.52,0.248-1.12,0.273-1.655,0.061c-0.745-0.431-1.056-2.086-0.634-4.312c0.052-0.261,0.108-0.525,0.173-0.783c1.05,0.226,2.109,0.38,3.183,0.459c0.619,0.877,1.298,1.716,2.025,2.503c-0.15,0.145-0.3,0.286-0.45,0.417L10.889,19.62L10.889,19.62z M16.842,10.817c-0.22-0.412-0.445-0.824-0.68-1.227c-0.23-0.398-0.469-0.792-0.717-1.181c0.755,0.094,1.476,0.22,2.152,0.375C17.381,9.479,17.128,10.153,16.842,10.817L16.842,10.817z M16.851,13.151c0.3,0.681,0.563,1.369,0.792,2.077c-0.727,0.164-1.462,0.291-2.203,0.375c0.253-0.393,0.492-0.797,0.727-1.2C16.406,13.99,16.631,13.573,16.851,13.151L16.851,13.151z M16.309,11.985c-0.314,0.647-0.652,1.284-1.012,1.912c-0.356,0.623-0.736,1.228-1.134,1.828c-0.698,0.052-1.425,0.075-2.161,0.075c-0.736,0-1.448-0.023-2.137-0.066c-0.408-0.595-0.792-1.205-1.153-1.828s-0.694-1.256-1.008-1.902H7.702c0.309-0.647,0.647-1.28,1.003-1.903c0.356-0.622,0.741-1.228,1.144-1.823c0.703-0.052,1.42-0.08,2.152-0.08c0.732,0,1.453,0.028,2.152,0.08c0.398,0.591,0.778,1.194,1.139,1.814S15.99,11.344,16.309,11.985L16.309,11.985z M7.832,9.598c-0.23,0.398-0.455,0.806-0.666,1.218c-0.295-0.697-0.544-1.382-0.75-2.042c0.675-0.15,1.392-0.272,2.137-0.366C8.306,8.797,8.062,9.195,7.832,9.598L7.832,9.598z M7.167,13.188v0.001c0.216,0.412,0.436,0.82,0.67,1.223c0.239,0.408,0.483,0.816,0.741,1.214c-0.731-0.08-1.458-0.196-2.175-0.352C6.609,14.6,6.867,13.901,7.167,13.188L7.167,13.188z M12.038,18.481L12.038,18.481c-0.478-0.516-0.956-1.086-1.42-1.701c0.45,0.018,0.914,0.028,1.383,0.028c0.483,0,0.956-0.01,1.425-0.033C12.995,17.369,12.531,17.938,12.038,18.481L12.038,18.481z M18.165,19.888L18.165,19.888c-0.043,0.571-0.324,1.106-0.774,1.466c-0.745,0.431-2.334-0.131-4.05-1.602c-0.197-0.169-0.394-0.352-0.595-0.539c0.716-0.792,1.378-1.631,1.978-2.512c1.073-0.089,2.142-0.253,3.197-0.492c0.047,0.192,0.089,0.385,0.127,0.572C18.278,17.793,18.315,18.846,18.165,19.888L18.165,19.888z M18.572,9.032c0.244,0.069,0.478,0.145,0.703,0.22c2.184,0.75,3.717,1.866,3.717,2.719c0,0.919-1.636,2.104-3.975,2.878c-0.131,0.042-0.262,0.084-0.398,0.122c-0.328-1.022-0.731-2.021-1.195-2.991C17.874,11.024,18.254,10.039,18.572,9.032L18.572,9.032z M13.26,4.325L13.26,4.325c1.745-1.518,3.371-2.112,4.112-1.687c0.792,0.455,1.097,2.292,0.6,4.706c-0.033,0.158-0.066,0.314-0.108,0.469c-1.041-0.235-2.095-0.403-3.156-0.497C14.1,6.444,13.434,5.61,12.712,4.827C12.895,4.654,13.073,4.489,13.26,4.325L13.26,4.325z M12.01,5.545c0.492,0.534,0.956,1.097,1.387,1.677c-0.928-0.042-1.861-0.042-2.789,0C11.067,6.617,11.54,6.056,12.01,5.545L12.01,5.545z M6.572,2.672C7.36,2.213,9.108,2.868,10.95,4.5c0.116,0.103,0.234,0.216,0.356,0.327C10.579,5.61,9.909,6.444,9.295,7.316C8.236,7.41,7.186,7.574,6.145,7.803C6.084,7.565,6.033,7.321,5.981,7.077C5.54,4.808,5.831,3.098,6.572,2.672L6.572,2.672z M4.627,9.28c0.267-0.094,0.539-0.179,0.811-0.258c0.319,1.017,0.703,2.016,1.148,2.981c-0.45,0.979-0.839,1.991-1.162,3.022l-0.001,0.001c-0.197-0.056-0.389-0.117-0.58-0.182c-0.998-0.315-2.134-0.812-2.953-1.462c-0.473-0.328-0.792-0.834-0.881-1.402C1.008,11.122,2.489,10.026,4.627,9.28L4.627,9.28z"
							/>
							<path
								fill="#DEDEDE"
								d="M10.618 16.78c.452.599.917 1.155 1.382 1.661v-1.633C11.532 16.808 11.067 16.798 10.618 16.78L10.618 16.78zM6.13 16.24c-.065.258-.121.522-.173.783-.422 2.227-.112 3.882.634 4.312.242.096.498.143.754.143.308 0 .616-.069.901-.204.975-.385 1.871-.946 2.644-1.654l-.001-.001c.15-.131.3-.272.45-.417-.726-.787-1.406-1.626-2.025-2.503C8.239 16.62 7.18 16.466 6.13 16.24L6.13 16.24zM7.167 13.188c-.3.713-.558 1.411-.764 2.086.717.155 1.444.272 2.175.352-.258-.397-.502-.806-.741-1.214-.234-.403-.453-.811-.67-1.223V13.188L7.167 13.188zM5.438 9.022C5.166 9.102 4.894 9.187 4.627 9.28c-2.138.745-3.619 1.842-3.619 2.699.089.568.407 1.074.881 1.402.82.65 1.955 1.147 2.953 1.462.192.066.384.127.58.182l.001-.001c.323-1.031.712-2.043 1.162-3.022C6.141 11.038 5.757 10.039 5.438 9.022L5.438 9.022zM8.554 8.408C7.809 8.502 7.092 8.624 6.417 8.774c.206.66.454 1.345.75 2.042.211-.412.435-.819.666-1.218C8.062 9.195 8.306 8.797 8.554 8.408L8.554 8.408zM12 8.198c-.732 0-1.448.028-2.151.08-.403.595-.788 1.201-1.144 1.823-.356.623-.694 1.256-1.003 1.903h.002c.314.646.647 1.279 1.008 1.902s.745 1.234 1.153 1.828c.688.043 1.4.066 2.135.066v-1.655l0 0c-1.186 0-2.147-.961-2.147-2.146 0-1.187.961-2.147 2.147-2.147l0 0V8.198L12 8.198zM12 5.555c-.466.508-.937 1.066-1.392 1.667C11.071 7.202 11.536 7.191 12 7.191V5.555L12 5.555zM7.183 2.529c-.24 0-.447.047-.611.143C5.831 3.098 5.54 4.808 5.981 7.077c.052.244.103.488.164.726 1.041-.229 2.091-.393 3.15-.487.614-.872 1.284-1.706 2.011-2.489C11.184 4.716 11.067 4.603 10.95 4.5 9.493 3.209 8.094 2.529 7.183 2.529L7.183 2.529z"
							/>
							<path
								fill="#48A8C1"
								d="M12,9.852c-1.186,0-2.147,0.961-2.147,2.147c0,1.185,0.961,2.146,2.147,2.146l0,0V9.852L12,9.852L12,9.852z"
							/>
							<path
								fill="#48A8C1"
								d="M7.344,21.479c-0.256,0-0.512-0.047-0.754-0.143c-0.745-0.431-1.056-2.086-0.634-4.312c0.052-0.261,0.108-0.525,0.173-0.783c1.05,0.226,2.109,0.38,3.183,0.459c0.619,0.877,1.298,1.716,2.025,2.503c-0.15,0.145-0.3,0.286-0.45,0.417l0.001,0.001c-0.773,0.708-1.669,1.269-2.644,1.654C7.961,21.41,7.653,21.479,7.344,21.479L7.344,21.479z M8.578,15.626c-0.731-0.08-1.458-0.196-2.175-0.352c0.205-0.675,0.464-1.373,0.764-2.086v0.001c0.216,0.412,0.436,0.82,0.67,1.223C8.076,14.82,8.32,15.228,8.578,15.626L8.578,15.626z M5.423,15.026c-0.197-0.056-0.389-0.117-0.58-0.182c-0.998-0.315-2.134-0.812-2.953-1.462c-0.473-0.328-0.792-0.834-0.881-1.402c0-0.857,1.481-1.954,3.619-2.699c0.267-0.094,0.539-0.179,0.811-0.258c0.319,1.017,0.703,2.016,1.148,2.981c-0.45,0.979-0.839,1.991-1.162,3.022L5.423,15.026L5.423,15.026z M7.167,10.816c-0.295-0.697-0.544-1.382-0.75-2.042c0.675-0.15,1.392-0.272,2.137-0.366c-0.248,0.388-0.492,0.787-0.722,1.19C7.602,9.997,7.377,10.404,7.167,10.816L7.167,10.816z M6.145,7.803C6.084,7.565,6.033,7.321,5.981,7.077C5.54,4.808,5.831,3.098,6.572,2.672c0.164-0.096,0.371-0.143,0.611-0.143c0.911,0,2.309,0.68,3.767,1.971c0.116,0.103,0.234,0.216,0.356,0.327C10.579,5.61,9.909,6.444,9.295,7.316C8.236,7.41,7.186,7.574,6.145,7.803L6.145,7.803z M7.187,1.523c-0.416,0-0.79,0.09-1.111,0.277C4.847,2.513,4.481,4.627,4.997,7.27c0.052,0.263,0.108,0.52,0.173,0.782c-0.3,0.084-0.595,0.179-0.872,0.278C1.795,9.196,0,10.564,0,11.98l0,0c0,1.463,1.912,2.93,4.514,3.82c0.211,0.069,0.422,0.141,0.638,0.201c-0.07,0.281-0.131,0.559-0.188,0.845c-0.491,2.602-0.108,4.663,1.12,5.371c0.324,0.187,0.705,0.277,1.127,0.277c1.226,0,2.798-0.761,4.34-2.111c0.149-0.132,0.3-0.27,0.45-0.414v-1.53c-0.465-0.506-0.93-1.062-1.382-1.661c0.449,0.018,0.914,0.028,1.382,0.028v-1.007c-0.735,0-1.446-0.024-2.135-0.066c-0.408-0.595-0.792-1.205-1.153-1.828s-0.694-1.256-1.008-1.902H7.702c0.309-0.647,0.647-1.28,1.003-1.903c0.356-0.622,0.741-1.228,1.144-1.823c0.703-0.052,1.419-0.08,2.151-0.08V7.191c-0.464,0-0.929,0.01-1.392,0.031C11.064,6.621,11.534,6.063,12,5.555V4.092c-0.123-0.118-0.249-0.235-0.375-0.348C10.027,2.326,8.427,1.523,7.187,1.523L7.187,1.523z"
							/>
						</svg>
					</li>
					<li className="w-10 h-10 p-2 bg-green-100 border border-green-600 rounded-full shadow">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
							<path
								fill="#439934"
								fillRule="evenodd"
								d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142-.035.165-.109.32-.164.48-.403.001-.814-.049-1.208.012-3.329.523-6.655 1.065-9.981 1.604-3.438.557-6.881 1.092-10.313 1.687-1.216.21-2.721-.041-3.212 1.641-.014.046-.154.054-.235.08l.166-10.051c-.057-8.084-.113-16.168-.169-24.252l1.602-.275c2.62-.429 5.24-.864 7.862-1.281 3.129-.497 6.261-.98 9.392-1.465 1.381-.215 2.764-.412 4.148-.618z"
								clipRule="evenodd"
							/>
							<path
								fill="#45A538"
								fillRule="evenodd"
								d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37-8.717-8.222-15.093-17.899-18.233-29.566-.865-3.211-1.442-6.474-1.627-9.792-.13-2.322-.318-4.665-.154-6.975.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702 1.759 5.18 3.505 10.364 5.242 15.551 5.458 16.3 10.909 32.604 16.376 48.9.107.318.384.579.583.866l-.87 2.969z"
								clipRule="evenodd"
							/>
							<path
								fill="#46A037"
								fillRule="evenodd"
								d="M88.038 42.812c-1.384.206-2.768.403-4.149.616-3.131.485-6.263.968-9.392 1.465-2.622.417-5.242.852-7.862 1.281l-1.602.275-.012-1.045c-.053-.859-.144-1.717-.154-2.576-.069-5.478-.112-10.956-.18-16.434-.042-3.429-.105-6.857-.175-10.285-.043-2.13-.089-4.261-.185-6.388-.052-1.143-.236-2.28-.311-3.423-.042-.657.016-1.319.029-1.979.817 1.583 1.616 3.178 2.456 4.749 1.327 2.484 3.441 4.314 5.344 6.311 7.523 7.892 12.864 17.068 16.193 27.433z"
								clipRule="evenodd"
							/>
							<path
								fill="#409433"
								fillRule="evenodd"
								d="M65.036 80.753c.081-.026.222-.034.235-.08.491-1.682 1.996-1.431 3.212-1.641 3.432-.594 6.875-1.13 10.313-1.687 3.326-.539 6.652-1.081 9.981-1.604.394-.062.805-.011 1.208-.012-.622 2.22-1.112 4.488-1.901 6.647-.896 2.449-1.98 4.839-3.131 7.182-1.72 3.503-3.863 6.77-6.353 9.763-1.919 2.308-4.058 4.441-6.202 6.548-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23-1.214-1.038-1.256-2.753c-.865-3.223-1.319-6.504-1.394-9.838l.023-.561.171-2.426c.057-.828.133-1.655.168-2.485.129-2.982.241-5.964.359-8.946z"
								clipRule="evenodd"
							/>
							<path
								fill="#4FAA41"
								fillRule="evenodd"
								d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913-2.75-8.209-5.467-16.431-8.213-24.642-2.217-6.628-4.452-13.249-6.7-19.867-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879 2.265 6.703 4.526 13.407 6.768 20.118 2.916 8.73 5.814 17.467 8.728 26.198.116.349.308.671.491 1.062l.67-.78c-.056 3.351-.112 6.701-.167 10.052z"
								clipRule="evenodd"
							/>
							<path
								fill="#4AA73C"
								fillRule="evenodd"
								d="M43.155 32.227c.21.274.511.516.617.826 2.248 6.618 4.483 13.239 6.7 19.867 2.746 8.211 5.463 16.433 8.213 24.642 1.662 4.961 3.362 9.911 5.062 14.913l.765-.289-.171 2.426-.155.559c-.266 2.656-.49 5.318-.814 7.968-.163 1.328-.509 2.632-.772 3.947-.198-.287-.476-.548-.583-.866-5.467-16.297-10.918-32.6-16.376-48.9-1.737-5.187-3.483-10.371-5.242-15.551-.089-.263-.34-.469-.516-.702 1.09-2.947 2.181-5.894 3.272-8.84z"
								clipRule="evenodd"
							/>
							<path
								fill="#57AE47"
								fillRule="evenodd"
								d="M65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062-2.913-8.731-5.812-17.468-8.728-26.198-2.242-6.711-4.503-13.415-6.768-20.118-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769 1.681 4.921 3.347 9.848 5.003 14.778 1.547 4.604 3.071 9.215 4.636 13.813.105.308.47.526.714.786l.012 1.045c.058 8.082.115 16.167.171 24.251z"
								clipRule="evenodd"
							/>
							<path
								fill="#60B24F"
								fillRule="evenodd"
								d="M65.021 45.404c-.244-.26-.609-.478-.714-.786-1.565-4.598-3.089-9.209-4.636-13.813-1.656-4.93-3.322-9.856-5.003-14.778-.099-.287-.371-.514-.562-.769 1.969-1.928 3.877-3.925 5.925-5.764 1.821-1.634 3.285-3.386 3.352-5.968.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979.075 1.143.259 2.28.311 3.423.096 2.127.142 4.258.185 6.388.069 3.428.132 6.856.175 10.285.067 5.478.111 10.956.18 16.434.008.861.098 1.718.152 2.577z"
								clipRule="evenodd"
							/>
							<path
								fill="#A9AA88"
								fillRule="evenodd"
								d="M62.598 107.085c.263-1.315.609-2.62.772-3.947.325-2.649.548-5.312.814-7.968l.066-.01.066.011c.075 3.334.529 6.615 1.394 9.838-.176.232-.425.439-.518.701-.727 2.05-1.412 4.116-2.143 6.166-.1.28-.378.498-.574.744l-.747-2.566.87-2.969z"
								clipRule="evenodd"
							/>
							<path
								fill="#B6B598"
								fillRule="evenodd"
								d="M62.476 112.621c.196-.246.475-.464.574-.744.731-2.05 1.417-4.115 2.143-6.166.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722l-.695-3.985z"
								clipRule="evenodd"
							/>
							<path
								fill="#C2C1A7"
								fillRule="evenodd"
								d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624-.839 2.403-1.64 4.819-2.485 7.222-.107.305-.404.544-.614.812-.109-1.387-.22-2.771-.331-4.158z"
								clipRule="evenodd"
							/>
							<path
								fill="#CECDB7"
								fillRule="evenodd"
								d="M63.503 120.763c.209-.269.506-.508.614-.812.845-2.402 1.646-4.818 2.485-7.222.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477-.575 1.614-1.117 3.24-1.694 4.854-.119.333-.347.627-.525.938-.158-.207-.441-.407-.454-.623-.051-.841-.016-1.688-.013-2.533z"
								clipRule="evenodd"
							/>
							<path
								fill="#DBDAC7"
								fillRule="evenodd"
								d="M63.969 123.919c.178-.312.406-.606.525-.938.578-1.613 1.119-3.239 1.694-4.854.065-.183.263-.319.398-.477l.012 3.64-1.218 3.124-1.411-.495z"
								clipRule="evenodd"
							/>
							<path
								fill="#EBE9DC"
								fillRule="evenodd"
								d="M65.38 124.415l1.218-3.124.251 3.696-1.469-.572z"
								clipRule="evenodd"
							/>
							<path
								fill="#CECDB7"
								fillRule="evenodd"
								d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23-1.054 1.867z"
								clipRule="evenodd"
							/>
							<path
								fill="#4FAA41"
								fillRule="evenodd"
								d="M64.316 95.172l-.066-.011-.066.01.155-.559-.023.56z"
								clipRule="evenodd"
							/>
						</svg>
					</li>
					<li className="w-10 h-10 p-2 bg-green-100 border border-green-600 rounded-full shadow">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
							<path
								fill="#cb3837"
								d="M2,38.5H126V82.21H64V89.5H36.44V82.21H2ZM8.89,74.93H22.67V53.07h6.89V74.93h6.89V45.79H8.89ZM43.33,45.79V82.21H57.11V74.93H70.89V45.79Zm13.78,7.29H64V67.64H57.11Zm20.67-7.29V74.93H91.56V53.07h6.89V74.93h6.89V53.07h6.89V74.93h6.89V45.79Z"
							/>
						</svg>
					</li>
				</ul>
				<time dateTime="" className="font-thin">
					09 Jul 2021
				</time>
			</footer>
		</li>
	);

export default BlogCard;
