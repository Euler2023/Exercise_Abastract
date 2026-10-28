---
title: "Exercise LA650: The Eisenstein Lattice Pairing in Poisson Summation"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.11, Exercise 4.11.2, printed p. 161, PDF p. 175"
source_refs:
  - "S7/ch-4/sec-11/ex-2"
created: 2026-10-28
---

# Exercise LA650: The Eisenstein Lattice Pairing in Poisson Summation

## Problem Statement

> [!question] Original Exercise 4.11.2
> Confirm that under $(x_1,x_2)\leftrightarrow x_1+x_2\mu_3$, the exponent $-\langle u,vS\rangle$ of Section4.10 becomes $-(vu^*)_2$. Use this to verify the application of Poisson summation with $3u,3v,3N$ in the proof of Lemma4.11.1.
>
> Here $\rho=\mu_3$, $A=\mathbb Z[\rho]$, $\alpha=i\sqrt3=1+2\rho$, $B=\alpha^{-1}A$, and $(z)_2$ is the coefficient of $\rho$.

## Hints

> [!hint]- Hint 1
> Use $\rho^2=-1-\rho$ and conjugation $\rho^*=\rho^2$.

> [!hint]- Hint 2
> The quadratic form has Gram matrix $\begin{pmatrix}2&-1\\-1&2\end{pmatrix}$; normalize its determinant to one.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Write $u=u_1+u_2\rho$, $v=v_1+v_2\rho$. Multiplication gives $(vu^*)_2=v_2u_1-v_1u_2$. On row vectors $vS=(v_2,-v_1)$, so $\langle u,vS\rangle=u_1v_2-u_2v_1=(vu^*)_2$, proving the exponent identity.
>
> Let $\gamma$ be the positive square root of $3^{-1/2}\begin{pmatrix}2&-1\\-1&2\end{pmatrix}$. It has determinant one and $|x\gamma|^2=(2/\sqrt3)|x_1+x_2\rho|^2$. At level $3N$ the shifted zero-weight theta satisfies
> $$
> \vartheta_0^{3v}\bigl(\gamma\sqrt{3N}(t/\sqrt3)^{1/2}\bigr)=\sum_{n\in A}e^{-2\pi N|v/N+n|^2t}=\theta_v(it,N).
> $$
> Insert this scaling in the finite-Fourier Poisson identity from4.10.5. The normalization $1/(3N)$, together with the scale conversion, gives $t/(N\sqrt3)$, and the kernel becomes
> $$
> e\bigl(-\langle3u,3vS\rangle/(3N)\bigr)=e\bigl(-3(vu^*)_2/N\bigr).
> $$
> Thus the intermediate formula is
> $$
> \theta_v(i/t,N)=\frac{t}{N\sqrt3}\sum_{u\in(\frac13 A)/NA}e\bigl(-3(vu^*)_2/N\bigr)\theta_u(3it,N).
> $$
> The classes are legitimate because $3v\in\alpha A\subset A$. Set $w=\alpha u$. The map from $(\frac13A)/NA$ to $B/NA$ has three-element fibers, indexed by $A/\alpha A$. Since $\alpha^*=-\alpha$ and $\alpha\alpha^*=3$, its kernel is $e(- (\alpha vw^*)_2/N)$. For $z=z_1+z_2\rho$, direct multiplication gives $(\alpha z)_2=2z_1-z_2=\operatorname{tr}(z)$. The kernel is therefore $e(-\operatorname{tr}(vw^*)/N)$ and is constant on each fiber (because $v\in B$).
>
> Finally, splitting $n\in A$ modulo $\alpha A$ gives $\sum_{\alpha u\equiv w\ (NA)}\theta_u(3\tau,N)=\theta_w(\tau,N)$. The displayed intermediate formula consequently becomes
> $$
> \theta_v(-1/\tau,N)=\frac{-i\tau}{N\sqrt3}\sum_{w\in B/NA}e(-\operatorname{tr}(vw^*)/N)\theta_w(\tau,N).
> $$
> It holds first for $\tau=it$, $t>0$, and then throughout $\mathcal H$ by holomorphy and the identity theorem. This verifies the full Poisson application and every scale factor.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 161 / PDF 175. The solution above is independently derived.
- **Routing:** The principal toolkit is linear-algebra; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
