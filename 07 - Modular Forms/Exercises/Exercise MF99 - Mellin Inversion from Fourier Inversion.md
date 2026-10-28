---
title: "Exercise MF99: Mellin Inversion from Fourier Inversion"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.9, Exercise 4.9.5, printed p. 147, PDF p. 161"
source_refs:
  - "S7/ch-4/sec-9/ex-5"
created: 2026-10-28
---

# Exercise MF99: Mellin Inversion from Fourier Inversion

## Problem Statement

> [!question] Original Exercise 4.9.5
> If $g$ is holomorphic in a right half-plane, its inverse Mellin transform is $f(t)=(2\pi i)^{-1}\int_{\sigma-i\infty}^{\sigma+i\infty}g(s)t^{-s}\,ds$ for positive $t$ where the integral converges absolutely. Complex contour integration shows independence of $\sigma$.
>
> (a) Let $t=e^x$, $s=\sigma+2\pi iy$, $f(t)=e^{-\sigma x}f_\sigma(x)$, $g(s)=g_\sigma(y)$. Show that $g(s)=\int_0^\infty f(t)t^s\,dt/t$ is equivalent to $g_\sigma(y)=\int_\mathbb R f_\sigma(x)e^{2\pi ixy}\,dx$, and that the inverse Mellin formula is equivalent to $f_\sigma(x)=\int_\mathbb R g_\sigma(y)e^{-2\pi iyx}\,dy$. Fourier inversion then gives Mellin inversion.
>
> (b) Evaluate $\int_{\sigma-i\infty}^{\sigma+i\infty}\Gamma(s)x^{-s}\,ds$ for any $\sigma>0$. (A hint for this exercise is at the end of the book.)

> [!warning] Source issue
> The introductory assertion about contour independence suppresses decay hypotheses; Fourier inversion likewise needs its integrability and pointwise regularity assumptions. They are stated explicitly in the solution and verified for the gamma integral, so no unjustified contour shift is used.

## Hints

> [!hint]- Hint 1
> Use $dt/t=dx$ and $ds=2\pi i\,dy$.

> [!hint]- Hint 2
> The Mellin transform of $e^{-t}$ is $\Gamma(s)$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a)** Under absolute convergence, $t=e^x$ transforms the forward integral into
> $$
> \int_\mathbb R f(e^x)e^{\sigma x}e^{2\pi iyx}dx
> =\int_\mathbb R f_\sigma(x)e^{2\pi iyx}dx.
> $$
> In the inverse integral substitute $s=\sigma+2\pi iy$, giving
> $$
> f(e^x)=e^{-\sigma x}\int_\mathbb R g_\sigma(y)e^{-2\pi iyx}dy.
> $$
> Multiplication by $e^{\sigma x}$ gives the second equivalence. If $f_\sigma,g_\sigma$ are integrable, Fourier inversion proves the converse equality at each continuity point of $f_\sigma$ (and almost everywhere in its usual $L^1$ formulation). Those are the hypotheses under which the statement is applied here.
>
> Contour independence requires decay sufficient to discard horizontal edges, in addition to holomorphy: for example, if $g(u+iv)=O((1+|v|)^{-1-\epsilon})$ uniformly for $u$ between two admissible vertical lines, the horizontal integrals tend to zero and Cauchy's theorem proves equality of the inverse integrals. Absolute convergence on a single line and holomorphy alone do not supply that argument.
>
> **(b)** Take $f(t)=e^{-t}$, $t>0$. Its Mellin transform is $\Gamma(s)$ for $\operatorname{Re}s>0$. For every $\sigma>0$, $f_\sigma(x)=e^{\sigma x-e^x}$ is integrable and smooth. Its derivative is integrable and repeated differentiation remains integrable, so its Fourier transform decays faster than any fixed inverse power; Fourier inversion is applicable. Hence for every positive $x$,
> $$
> \boxed{\int_{\sigma-i\infty}^{\sigma+i\infty}\Gamma(s)x^{-s}\,ds=2\pi i\,e^{-x}.}
> $$
> The orientation is upward, explaining the positive $2\pi i$. The statement's Mellin setup uses positive $x$; extension to a complex sector would need a branch and separate convergence hypotheses.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions|L-functions]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 147 / PDF 161. The solution above is independently derived.
- **Routing:** The principal toolkit is modular-forms; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
