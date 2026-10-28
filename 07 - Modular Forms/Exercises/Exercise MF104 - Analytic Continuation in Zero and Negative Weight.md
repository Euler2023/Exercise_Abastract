---
title: "Exercise MF104: Analytic Continuation in Zero and Negative Weight"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.10, Exercise 4.10.6, printed p. 154, PDF p. 168"
source_refs:
  - "S7/ch-4/sec-10/ex-6"
created: 2026-10-28
---

# Exercise MF104: Analytic Continuation in Zero and Negative Weight

## Problem Statement

> [!question] Original Exercise 4.10.6
> (a) Define $h_0(x)=1$ for all $x\in\mathbb R^2$. For $N\ge1$ and $k=0$ define $\vartheta_0^v$ by the section's formula. Prove Theorem4.10.2 when $k=0$.
>
> (b) When $k<0$ define $h_k(x)=\overline{h_{-k}(x)}$. Prove Theorem4.10.2 when $k<0$. (A hint for this exercise is at the end of the book.)
>
> The theorem concerns $G_k^a=\sum_v(a(v)+(-1)^k\widehat a(-v))G_k^v$: for each $\tau\in\mathcal H$, $(\pi/N)^{-s}\Gamma(|k|/2+s)G_k^a(\tau,s-k/2)$ continues to the whole plane invariant under $s\mapsto1-s$, analytically for $k\ne0$ and with simple poles at zero and one for $k=0$.

> [!warning] Source issue
> For an arbitrary function $a$, the theorem's weight-zero poles are **at most** simple. They are present exactly when $C=a(0)+N^{-1}\sum_v a(v)\ne0$; for example $a=0$ gives the identically zero function. The printed unconditional pole wording is corrected by the explicit residue computation.

## Hints

> [!hint]- Hint 1
> At weight zero subtract the constant $C=a(0)+\widehat a(0)$ before integrating.

> [!hint]- Hint 2
> For negative weight the polynomial degree is $|k|$; track this separately from the slash weight.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a)** Put $\Theta(t)=\Theta_0^a(\gamma\sqrt t)$ for fixed $\gamma\in\operatorname{SL}_2(\mathbb R)$. Gaussian Poisson summation gives $\Theta(t)=t^{-1}\Theta(1/t)$. Its constant at infinity is $C=a(0)+\widehat a(0)$, since only the zero shifted lattice contains the zero vector. The remaining terms decay exponentially. Initially for $\operatorname{Re}s>1$ define $H(s)=\int_0^\infty(\Theta(t)-C)t^sdt/t$. Splitting at one and applying the theta relation gives
> $$
> H(s)=\int_1^\infty(\Theta(t)-C)(t^s+t^{1-s})\frac{dt}{t}-\frac C s-\frac C{1-s}.
> $$
> The integral is entire by exponential decay, uniformly with all $s$-derivatives on compact sets. The expression is invariant under $s\mapsto1-s$ and has residues $-C,C$ at zero and one. Termwise gamma integration in its original convergence region, at $\gamma=\gamma_\tau=y^{-1/2}\begin{pmatrix}y&x\\0&1\end{pmatrix}$, gives $H(s)=(\pi/N)^{-s}\Gamma(s)G_0^a(\tau,s)$, proving the corrected pole assertion.
>
> **(b)** Let $m=-k>0$. Then $h_k=\overline{h_m}$ is homogeneous of degree $m$, with zero constant. Its Gaussian has Fourier eigenvalue $i^m$ (the conjugate harmonic polynomial gives the conjugate eigenvalue), while $h_k(xS)=i^mh_k(x)$. The product of these factors is $(-1)^m=(-1)^k$, so the same Poisson calculation and symmetrization prove the same theta transformation. No zero term remains, and both ends of the Mellin integral decay rapidly after using that transformation. Thus its continuation is the entire symmetric function
> $$
> H_k(s,\gamma)=\int_1^\infty\Theta_k^a(\gamma\sqrt t)(t^s+t^{1-s})\frac{dt}{t}.
> $$
> To identify it with the stated completion, note that $h_k(n\gamma_\tau)=(c\tau+d)^m/y^{m/2}$ and $|n\gamma_\tau|^2=|c\tau+d|^2/y$. Termwise Mellin integration therefore gives
> $$
> H_k(s,\gamma_\tau)=\pi^{-m/2}(y^{k/2})(\pi/N)^{-s}\Gamma(m/2+s)G_k^a(\tau,s-k/2).
> $$
> The prefactor is nonzero and independent of $s$. Cancelling it proves the asserted entire continuation and functional equation for negative $k$. The initial interchange is justified for $\operatorname{Re}s>1$ by absolute lattice convergence; outside that region the integral defines the continuation, not a rearrangement of a divergent series.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions|L-functions]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 154 / PDF 168. The solution above is independently derived.
- **Routing:** The principal toolkit is modular-forms; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
