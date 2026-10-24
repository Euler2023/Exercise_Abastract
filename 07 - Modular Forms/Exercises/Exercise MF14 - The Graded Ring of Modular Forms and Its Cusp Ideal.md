---
title: "Exercise MF14: The Graded Ring of Modular Forms and Its Cusp Ideal"
topic: modular-forms
difficulty: beginner
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005 (corrected fourth printing, 2016), Ch. 1, §1.1, Exercise 1.1.3, printed p. 8, PDF p. 23"
source_refs:
  - "S7/ch-1/sec-1/ex-3"
created: 2026-10-24
---

# Exercise MF14: The Graded Ring of Modular Forms and Its Cusp Ideal

## Problem Statement

> [!question] Exercise 1.1.3
> **(a)** Show that the set $\mathcal M_k(\mathrm{SL}_2(\mathbb Z))$ of modular forms of weight $k$ forms a vector space over $\mathbb C$.
>
> **(b)** If $f$ is a modular form of weight $k$ and $g$ is a modular form of weight $l$, show that $fg$ is a modular form of weight $k+l$.
>
> **(c)** Show that $\mathcal S_k(\mathrm{SL}_2(\mathbb Z))$ is a vector subspace of $\mathcal M_k(\mathrm{SL}_2(\mathbb Z))$ and that $\mathcal S(\mathrm{SL}_2(\mathbb Z))$ is an ideal in $\mathcal M(\mathrm{SL}_2(\mathbb Z))$.


## Hints

> [!hint]- Hint 1
> Check holomorphy, the weight transformation, and the nonnegative-power Fourier expansion separately.

> [!hint]- Hint 2
> The constant term of a product is the product of the constant terms. Interpret the graded spaces as direct sums, whose elements have finite weight support.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Use Definition 1.1.2: a weight-$k$ modular form is holomorphic on $\mathcal H$, satisfies $f(\gamma\tau)=(c\tau+d)^kf(\tau)$ for every $\gamma\in\mathrm{SL}_2(\mathbb Z)$, and has a Fourier expansion $f(\tau)=\sum_{n\geq0}a_n(f)q^n$ holomorphic at $q=0$. Here $q=e^{2\pi i\tau}$ [S7, Definition 1.1.2, printed p. 4, PDF p. 19]. A cusp form additionally has $a_0(f)=0$ [S7, Definition 1.1.3, printed p. 6, PDF p. 21].
>
> **(a)** The zero function satisfies all three conditions. If $f,g\in\mathcal M_k$ and $u,v\in\mathbb C$, then $uf+vg$ is holomorphic,
> $$
> (uf+vg)(\gamma\tau)=(c\tau+d)^k(uf+vg)(\tau),
> $$
> and its $q$-expansion is $\sum_{n\geq0}(ua_n(f)+va_n(g))q^n$, holomorphic at zero. Thus $\mathcal M_k$ is a subspace of the vector space of all complex-valued functions on $\mathcal H$; its vector-space axioms are inherited.
>
> **(b)** Products of holomorphic functions are holomorphic, and
> $$
> (fg)(\gamma\tau)=(c\tau+d)^{k+l}f(\tau)g(\tau).
> $$
> The two holomorphic $q$-series multiply to a holomorphic series with coefficients
> $$
> a_n(fg)=\sum_{r=0}^{n}a_r(f)a_{n-r}(g),\qquad n\geq0.
> $$
> Hence $fg\in\mathcal M_{k+l}$.
>
> **(c)** The constant-term map $a_0:\mathcal M_k\to\mathbb C$ is linear, and $\mathcal S_k=\ker a_0$, so it is a subspace. If $f\in\mathcal S_k$ and $g\in\mathcal M_l$, then (b) and the coefficient formula show
> $$
> a_0(fg)=a_0(f)a_0(g)=0,
> $$
> so $fg\in\mathcal S_{k+l}$. Now set $\mathcal M=\bigoplus_{k\in\mathbb Z}\mathcal M_k$ and $\mathcal S=\bigoplus_{k\in\mathbb Z}\mathcal S_k$, as in the text. Their elements are finite sums of homogeneous components. Distribute any product componentwise: every product involving one cusp component is again a cusp component. Since $\mathcal S$ is an additive subgroup, this proves that $\mathcal S$ is a homogeneous ideal in the commutative graded ring $\mathcal M$.

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/Cusp Forms|Cusp Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]

## Notes

- **Scope:** This proves closure and the ideal property, without invoking finite-dimensionality or a structure theorem for the graded ring.

- **Source and proof status:** The complete numbered exercise was checked against the original PDF at [S7, Ch. 1, §1.1, Exercise 1.1.3, printed p. 8, PDF p. 23]. The solution is an independent derivation in this vault; named external inputs are identified above.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive#Chapter 1|Diamond–Shurman Chapter 1]]. Learning status remains `not-started`.
