---
title: "Exercise MF102: Fourier Eigenfunctions from Harmonic Gaussian Polynomials"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.10, Exercise 4.10.4, printed p. 154, PDF p. 168"
source_refs:
  - "S7/ch-4/sec-10/ex-4"
created: 2026-10-28
---

# Exercise MF102: Fourier Eigenfunctions from Harmonic Gaussian Polynomials

## Problem Statement

> [!question] Original Exercise 4.10.4
> (a) Let $f\in L^1(\mathbb R^l)$, $j\in\{1,\ldots,l\}$, and $g(x)=x_jf(x)\in L^1$. Show $\widehat g=-(2\pi i)^{-1}\partial_{x_j}\widehat f$. Applying repeatedly gives, for $f_k(z)=(-i)^kz^ke^{-\pi z\bar z}$,
> $$
> \widehat f_k(z)=(-i)^k\left(-\frac1{\pi i}\right)^k\left(\frac\partial{\partial\bar z}\right)^ke^{-\pi z\bar z}.
> $$
> Compute that this is $\widehat f_k=(-i)^kf_k$.
>
> (b) Show that $h_k(x)=(z(xS))^k$ and $h_k(xS)=(-i)^kh_k(x)$, with $z(c,d)=c+id$ and $h_k(c,d)=(-i)^k(c+id)^k$.

## Hints

> [!hint]- Hint 1
> Dominate the difference quotient of the Fourier kernel by $2\pi|x_jf(x)|$.

> [!hint]- Hint 2
> Wirtinger differentiation treats $z$ and $\bar z$ independently.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a)** The derivative of the Fourier kernel with respect to frequency $\xi_j$ is $-2\pi ix_j e^{-2\pi i\langle x,\xi\rangle}$. The difference quotient is bounded by $2\pi|x_jf(x)|$, which is integrable. Dominated convergence proves $\partial_{\xi_j}\widehat f=-2\pi i\widehat{x_jf}$, with continuity of the derivative following by the same argument.
>
> For the Gaussian all polynomial multiples are integrable, so iteration is legitimate. The Gaussian is its own Fourier transform; also $\partial_x+i\partial_y=2\partial_{\bar z}$. Since $\partial_{\bar z}z=0$,
> $$
> (\partial_{\bar z})^ke^{-\pi z\bar z}=(-\pi z)^ke^{-\pi z\bar z}.
> $$
> Substitution in the given expression yields $(-i)^k(1/i)^kz^ke^{-\pi z\bar z}=(-i)^{2k}z^ke^{-\pi z\bar z}=(-i)^kf_k(z)$, as claimed.
>
> **(b)** For the row $x=(c,d)$, $xS=(d,-c)$ and $z(xS)=d-ic=-i(c+id)=-iz(x)$. Raising to the $k$th power gives $h_k(x)=(z(xS))^k$, and multiplying by the prefactor $(-i)^k$ once more gives $h_k(xS)=(-i)^kh_k(x)$. Orthogonality of $S$ also gives $f_k(xS)=(-i)^kf_k(x)$, the identity needed in theta Poisson summation.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions|L-functions]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 154 / PDF 168. The solution above is independently derived.
- **Routing:** The principal toolkit is modular-forms; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
