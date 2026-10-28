---
title: "Exercise MF97: Gaussian Fourier Integrals and Scaling"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.9, Exercise 4.9.3, printed p. 147, PDF p. 161"
source_refs:
  - "S7/ch-4/sec-9/ex-3"
created: 2026-10-28
---

# Exercise MF97: Gaussian Fourier Integrals and Scaling

## Problem Statement

> [!question] Original Exercise 4.9.3
> (a) Use complex contour integration to show that $\int_{-\infty}^\infty e^{-\pi(t+ix)^2}\,dt$ equals $\int_{-\infty}^\infty e^{-\pi t^2}\,dt$.
>
> (b) Show that this Gaussian integral is one. (A hint for this exercise is at the end of the book.)
>
> (c) If $f\in L^1(\mathbb R^l)$ is a product $f(x)=f_1(x_1)\cdots f_l(x_l)$, show $\widehat f(x)=\widehat f_1(x_1)\cdots\widehat f_l(x_l)$.
>
> (d) For $h\in L^1(\mathbb R^l)$ and $r>0$, show that the Fourier transform of $h(rx)$ is $r^{-l}\widehat h(x/r)$.

## Hints

> [!hint]- Hint 1
> Integrate the entire Gaussian around a rectangle with horizontal sides at imaginary heights zero and $x$.

> [!hint]- Hint 2
> Square the real integral and use polar coordinates; use Fubini and a dilation for the last parts.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a)** Fix real $x$ and integrate $e^{-\pi z^2}$ around the rectangle with vertices $-R,R,R+ix,-R+ix$ (reverse the vertical direction when $x<0$). Cauchy's theorem makes the boundary integral zero. On a vertical edge $z=\pm R+iy$, $|e^{-\pi z^2}|=e^{-\pi R^2+\pi y^2}\le e^{-\pi R^2+\pi x^2}$, so its integral tends to zero. The horizontal integrals converge absolutely and their orientations are opposite. Letting $R\to\infty$ proves the equality.
>
> **(b)** Let $I=\int_\mathbb R e^{-\pi t^2}\,dt>0$. Tonelli's theorem and polar coordinates give
> $$
> I^2=\int_{\mathbb R^2}e^{-\pi(x^2+y^2)}dx\,dy=2\pi\int_0^\infty r e^{-\pi r^2}dr=1.
> $$
> Thus $I=1$.
>
> **(c)** For integrable factors, absolute integrability permits Fubini and separates the exponential into the product of $l$ one-dimensional exponentials, giving the assertion. The usual statement assumes each $f_j\in L^1(\mathbb R)$; if only the product is specified to be integrable and nonzero almost everywhere in the product sense, Tonelli applied to $\prod|f_j|$ forces all factor norms finite and positive. If a factor is zero almost everywhere, the product transform is zero and the assertion is understood using integrable representatives; otherwise an undefined transform of a nonintegrable unused factor would not be a meaningful expression.
>
> **(d)** Substitute $y=rx$ in the defining integral. The Jacobian is $r^{-l}$ and the phase becomes $e^{-2\pi i\langle y,\xi/r\rangle}$, so the transform at $\xi$ is $r^{-l}\widehat h(\xi/r)$.
>
> As a check combining(a,b), completing the square gives $\widehat{e^{-\pi t^2}}(x)=e^{-\pi x^2}$, with no missing $2\pi$ factor.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions|L-functions]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 147 / PDF 161. The solution above is independently derived.
- **Factor hypothesis in(c):** The displayed product of individual Fourier transforms presupposes that those transforms are defined, ordinarily by $f_j\in L^1$. The degenerate zero-product case does not force unused factors to be integrable.
- **Routing:** The principal toolkit is modular-forms; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
