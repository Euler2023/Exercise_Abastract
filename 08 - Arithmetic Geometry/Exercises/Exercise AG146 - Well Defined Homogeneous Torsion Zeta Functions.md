---
title: "Exercise AG146: Well Defined Homogeneous Torsion Zeta Functions"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.8, Exercise 4.8.4, printed p. 142, PDF p. 156"
source_refs:
  - "S7/ch-4/sec-8/ex-4"
created: 2026-10-28
---

# Exercise AG146: Well Defined Homogeneous Torsion Zeta Functions

## Problem Statement

> [!question] Original Exercise 4.8.4
> (a) Verify that the function $F_1^{\bar v}$ is is well defined.
>
> (b) Verify that the function is degree-one homogeneous with respect to $\Gamma(N)$.
>
> For an order-$N$ vector $\bar v=(\bar c,\bar d)\in(\mathbb Z/N\mathbb Z)^2$, its definition on a lattice with ordered level marking is
> $$
> F_1^{\bar v}\bigl(\mathbb C/\Lambda,(\omega_1/N+\Lambda,\omega_2/N+\Lambda)\bigr)=Z_\Lambda((c\omega_1+d\omega_2)/N)-(c\eta_1+d\eta_2)/N.
> $$

> [!warning] Source issue
> The displayed torsion-zeta construction requires a nonzero marked torsion point. At $N=1$ the order-one vector is zero, so its argument lies in the lattice and $Z$ has a pole; the displayed finite difference is not defined. The intended construction and proof use $N>1$.

## Hints

> [!hint]- Hint 1
> Changing $c,d$ by multiples of $N$ shifts the argument by a lattice vector and adds exactly the subtracted quasiperiod.

> [!hint]- Hint 2
> Use $Z_{\lambda\Lambda}(\lambda z)=\lambda^{-1}Z_\Lambda(z)$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Define the additive quasiperiod homomorphism $\eta_\Lambda:\Lambda\to\mathbb C$ by $\eta(n_1\omega_1+n_2\omega_2)=n_1\eta_1+n_2\eta_2$. Its additivity follows by successive translations of $Z$. Put $z=(c\omega_1+d\omega_2)/N$.
>
> **(a)** Replacing $(c,d)$ by $(c+Nr,d+Ns)$ shifts $z$ by $\lambda=r\omega_1+s\omega_2$. The first term increases by $\eta(\lambda)$ and the correction increases by the same amount. If a different lattice basis realizes the same level marking, write $\omega_j'=\omega_j+N\lambda_j$. Then the argument increases by $c\lambda_1+d\lambda_2$ and the correction changes by $c\eta(\lambda_1)+d\eta(\lambda_2)$; again the difference cancels. The torsion point is not zero because $\bar v$ has order $N>1$ (in the weight-one construction), so the argument avoids the poles of $Z$. Thus the value is finite and independent of all permitted lifts. The vacuous level-one construction would require the excluded zero torsion point and is not used here.
>
> **(b)** The normally convergent defining series of $Z$ gives $Z_{\lambda\Lambda}(\lambda z)=\lambda^{-1}Z_\Lambda(z)$ for every $\lambda\ne0$, by scaling each summand. Taking differences gives $\eta_{\lambda\Lambda}(\lambda\omega)=\lambda^{-1}\eta_\Lambda(\omega)$. Hence $F_1$ scales by $\lambda^{-1}$, the book's degree-one homogeneity convention. A $\Gamma(N)$ change of oriented basis preserves the level marking, by(a), so this is homogeneity with respect to that marking. Specializing to $(\omega_1,\omega_2)=(\tau,1)$ yields $g_1^{\bar v}(\gamma\tau)=(c_\gamma\tau+d_\gamma)g_1^{\bar v}(\tau)$ for $\gamma\in\Gamma(N)$, the weight-one law.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Weierstrass Elliptic Functions|Weierstrass Elliptic Functions]]
- [[08 - Arithmetic Geometry/Concepts/Complex Tori and Isogenies|Complex Tori and Isogenies]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 142 / PDF 156. The solution above is independently derived.
- **Routing:** The principal toolkit is arithmetic-geometry; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
