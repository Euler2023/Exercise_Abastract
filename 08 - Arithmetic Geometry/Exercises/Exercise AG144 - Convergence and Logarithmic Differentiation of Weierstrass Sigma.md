---
title: "Exercise AG144: Convergence and Logarithmic Differentiation of Weierstrass Sigma"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.8, Exercise 4.8.1, printed p. 142, PDF p. 156"
source_refs:
  - "S7/ch-4/sec-8/ex-1"
created: 2026-10-28
---

# Exercise AG144: Convergence and Logarithmic Differentiation of Weierstrass Sigma

## Problem Statement

> [!question] Original Exercise 4.8.1
> This exercise touches briefly on properties of the infinite product $\sigma_\Lambda(z)$. Since the general theory of infinite products is not assumed and will not be explained here (see, for example,[JS87]), the results are necessarily informal.
>
> (a) Using the principal branch of the complex logarithm, show that for $0<|z|<\min\{|\omega|:\omega\in\Lambda,\omega\ne0\}$, the sum $\sum_{\omega\in\Lambda}'\log((1-z/\omega)e^{z/\omega+(z/\omega)^2/2})$ converges absolutely. It follows that the infinite product $\sigma_\Lambda(z)$ converges to a holomorphic function.
>
> (b) Show that if $f=\prod_{n=1}^Nf_n$ then $f'/f=\sum_{n=1}^Nf_n'/f_n$. The analogous result for infinite products holds for the functions $\sigma$ and $Z$.
>
> Here the prime omits zero and $\sigma_\Lambda(z)=z\prod_{\omega\in\Lambda}'(1-z/\omega)e^{z/\omega+(z/\omega)^2/2}$.

## Hints

> [!hint]- Hint 1
> The exponential factor cancels the first two terms of $\log(1-w)$.

> [!hint]- Hint 2
> Prove locally uniform convergence of the logarithmic tails before differentiating.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a)** For $|w|<1$ the analytic logarithm of the factor, continued from zero, is
> $$
> \log(1-w)+w+w^2/2=-\sum_{m\ge3}w^m/m.
> $$
> It agrees with the principal logarithm: $|\arg(1-w)|<\pi/2$ and $|\operatorname{Im}(w+w^2/2)|<3/2$, whose sum is less than $\pi$. For $|w|\le r<1$, its absolute value is at most $|w|^3/[3(1-r)]$. A two-dimensional lattice has $O(R^2)$ points in a disk of radius $R$, by comparison with disjoint small disks centered at lattice points. Consequently $\sum'|\omega|^{-3}<\infty$ (use dyadic annuli, whose contributions are $O(2^{-j})$). This proves the requested absolute convergence and uniform convergence on each smaller closed disk.
>
> More generally, on any compact set $|z|\le R$, separate the finitely many $|\omega|\le2R$. The remaining logarithmic factors converge uniformly by the same cubic bound. Exponentiating their sum gives a holomorphic nonvanishing tail; multiplication by the finite entire factors and $z$ proves that $\sigma$ is entire, with simple zeros exactly at the lattice points.
>
> **(b)** On an open set where all finite factors are nonzero, the product rule gives $f'=\sum_j f_j'\prod_{n\ne j}f_n$, and division gives the assertion. The identity then holds meromorphically through zeros. For the infinite product, the logarithmic-tail derivatives are
> $$
> \frac1{z-\omega}+\frac1\omega+\frac z{\omega^2}=O_R(|\omega|^{-3})
> $$
> on $|z|\le R$, $|\omega|>2R$. Hence their series also converges locally uniformly; differentiating the uniformly convergent analytic logarithmic tails is legitimate (equivalently apply Cauchy's integral formula on a slightly larger compact neighborhood). We obtain
> $$
> \frac{\sigma_\Lambda'(z)}{\sigma_\Lambda(z)}=\frac1z+\sum_{\omega\in\Lambda}'\left(\frac1{z-\omega}+\frac1\omega+\frac z{\omega^2}\right)=Z_\Lambda(z).
> $$
> This establishes the infinite identity away from the lattice and hence as a meromorphic identity, with convergence justification rather than formal multiplication.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Weierstrass Elliptic Functions|Weierstrass Elliptic Functions]]
- [[08 - Arithmetic Geometry/Concepts/Complex Tori and Isogenies|Complex Tori and Isogenies]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 142 / PDF 156. The solution above is independently derived.
- **Routing:** The principal toolkit is arithmetic-geometry; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
