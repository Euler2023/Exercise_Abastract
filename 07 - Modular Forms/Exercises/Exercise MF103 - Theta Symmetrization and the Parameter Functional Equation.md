---
title: "Exercise MF103: Theta Symmetrization and the Parameter Functional Equation"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.10, Exercise 4.10.5, printed p. 154, PDF p. 168"
source_refs:
  - "S7/ch-4/sec-10/ex-5"
created: 2026-10-28
---

# Exercise MF103: Theta Symmetrization and the Parameter Functional Equation

## Problem Statement

> [!question] Original Exercise 4.10.5
> (a) Show for all $\gamma\in\operatorname{GL}_2(\mathbb R)$ that
> $$
> \sum_v a(v)\vartheta_k^v(\gamma)=\sum_v\widehat a(-v)\widehat\vartheta_k^v(\gamma),\qquad
> \sum_v\widehat a(-v)\vartheta_k^v(\gamma)=\sum_v a(v)\widehat\vartheta_k^v(\gamma).
> $$
> (A hint for this exercise is at the end of the book.)
>
> (b) Prove Proposition4.10.1: the sum $\Theta_k^a(\gamma)=\sum_v(a(v)+(-1)^k\widehat a(-v))\vartheta_k^v(\gamma\sqrt N)$ satisfies $r\Theta_k^a(\gamma r)=r^{-1}\Theta_k^a(\gamma/r)$ for $\gamma\in\operatorname{SL}_2(\mathbb R)$, $r>0$.
>
> The theta functions are $\vartheta_k^v(\gamma)=\sum_{n\in\mathbb Z^2}h_k((v/N+n)\gamma)e^{-\pi|(v/N+n)\gamma|^2}$, and hats on theta mean the finite Fourier transform in $v$.

## Hints

> [!hint]- Hint 1
> Expand the finite transform and interchange its finite sums.

> [!hint]- Hint 2
> Combine the two terms using the already derived Poisson relation $r\vartheta_k^v(\gamma\sqrt N r)=(-1)^kr^{-1}\widehat\vartheta_k^v(\gamma\sqrt N/r)$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> For arbitrary functions $a,t$ on $G$, direct expansion gives
> $$
> \sum_v\widehat a(-v)t(v)=\frac1N\sum_{w,v}a(w)t(v)\mu_N^{\langle w,vS\rangle}=\sum_w a(w)\widehat t(w),
> $$
> using $\langle w,vS\rangle=-\langle v,wS\rangle$. Replace $t$ by $\widehat t$ and use $\widehat{\widehat t}=t$ to get the first identity as well. Taking $t(v)=\vartheta_k^v(\gamma)$ proves(a).
>
> For(b), write $\epsilon=(-1)^k$, and abbreviate $t_\pm(v)=\vartheta_k^v(\gamma\sqrt N r^{\pm1})$. Poisson summation for the Schwartz harmonic Gaussian, including the matrix change from4.10.2, gives $r t_+=\epsilon r^{-1}\widehat t_-$. Consequently
> $$
> r\Theta_k^a(\gamma r)=r^{-1}\sum_v\bigl(\epsilon a(v)+\widehat a(-v)\bigr)\widehat t_-(v).
> $$
> The two finite-transform identities turn this into $r^{-1}\sum_v(\epsilon\widehat a(-v)+a(v))t_-(v)=r^{-1}\Theta_k^a(\gamma/r)$. All theta series converge absolutely because they are polynomial multiples of Gaussians on a nonsingular lattice; the finite sum manipulations require no analytic limiting argument. This proves the proposition.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions|L-functions]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 154 / PDF 168. The solution above is independently derived.
- **Routing:** The principal toolkit is modular-forms; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
