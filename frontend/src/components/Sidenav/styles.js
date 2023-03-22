import styled from "styled-components";

export const Aside = styled.aside`
	&.sidenav {
		width: var(--nav-width);
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		top: 0;
		bottom: 0;
		left: -30%;
		z-index: var(--z-fixed);
		background-color: var(--primary-color);
		transition: 0.4s;
		padding: 0.5rem 0 2rem;
		box-shadow: 1px 0 6px -1px rgba(0, 0, 0, 0.2);

		& .logout {
			color: #888;
			font-size: 1.125rem;
		}

		&.show {
			left: 0;
		}

		& nav {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		& .nav_logo {
			width: 36px;
			height: 36px;
			border-radius: 0.9rem;
			background-color: var(--white);
			color: var(--bg-color);
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 2rem;

			& .icon {
				color: var(--primary-color);
			}
		}

		& ul {
			list-style-type: none;
			display: flex;
			flex-direction: column;
			row-gap: 1.125rem;
			margin-top: 1rem;

			& li {
				position: relative;

				& a {
					color: #999;
					font-size: 0.925rem;
					font-weight: 700;
					transition: 0.3s;

					&:hover {
						color: var(--white);
					}

					&.active {
						color: var(--white);

						&::after {
							display: block;
						}
					}

					&::after {
						content: "";
						height: 70%;
						width: 5px;
						background-color: var(--accent-color);
						position: absolute;
						right: -1.56rem;
						top: 3px;
						border-top-left-radius: 0.2rem;
						border-bottom-left-radius: 0.2rem;
						display: none;
					}
					& .icon {
						font-size: 1.125rem;
					}
				}
			}
		}
	}
`;
