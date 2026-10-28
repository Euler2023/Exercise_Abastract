---
title: "Exercise LA631: Prime Degeneracy Maps Generate the Oldspace"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.6, Exercise 5.6.2, printed p. 190, PDF p. 204"
source_refs:
  - "S7/ch-5/sec-6/ex-2"
created: 2026-10-28
---

# Exercise LA631: Prime Degeneracy Maps Generate the Oldspace

## Problem Statement

> [!question] Original Exercise 5.6.2
> If $pd\mid N$ then what relation holds between $i_{pd}(S_k(\Gamma_1(Np^{-1}d^{-1}))^2)$ and $i_p(S_k(\Gamma_1(Np^{-1}))\times i_d(S_k(\Gamma_1(Np^{-1}d^{-1}))^2))$? (Here $i_{pd}$ is from level $Np^{-1}d^{-1}$ to level $N$, $i_p$ is from level $Np^{-1}$ to level $N$, and $i_d$ is from level $Np^{-1}d^{-1}$ to level $Np^{-1}$.) Show that changing the definition of $S_k(\Gamma_1(N))^{\mathrm{old}}$ to sum over all divisors of $N$ doesn't add anything to the space of oldforms.

> [!warning] Source issue and corrected scope
> “All divisors” must mean all divisors greater than $1$. Including $i_1$ would give the entire cusp space and makes the assertion false. The original wording is retained above; the proof states the corrected range explicitly.

## Hints

> [!hint]- Hint 1
> Use $[\alpha_d]_k[\alpha_p]_k=[\alpha_{pd}]_k$, where $\alpha_d=\operatorname{diag}(d,1)$.

> [!hint]- Hint 2
> For every divisor $m>1$ choose a prime $p\mid m$ and factor $m=p d$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> At levels $L\mid N$ and $m=N/L$, put $V_m=[\alpha_m]_k$, so $V_m f(\tau)=m^{k-1}f(m\tau)$, and $i_m(f,g)=f+V_mg$. The slash composition law gives $V_pV_d=V_{pd}$. A form of level $N/(pd)$ is also of level $N/p$ by Exercise 5.6.1, and $V_dg=i_d(0,g)$ belongs to the latter space. Consequently
> $$
> i_{pd}(f,g)=f+V_p(V_dg)=i_p(f,i_d(0,g)),
> $$
> which proves the requested inclusion
> $$
> \operatorname{im}i_{pd}\subset i_p\bigl(S_k(\Gamma_1(N/p))\times\operatorname{im}i_d\bigr)\subset\operatorname{im}i_p.
> $$
> The middle space may contain additional vectors, so inclusion is the assertion needed here.
>
> Now set $\mathcal O_N=\sum_{p\mid N,\ p\text{ prime}}\operatorname{im}i_p$. Every prime is a divisor greater than one, giving one inclusion in
> $$
> \mathcal O_N=\sum_{m\mid N,\ m>1}\operatorname{im}i_m.
> $$
> For the other inclusion, choose a prime $p\mid m$ and apply the preceding inclusion with $d=m/p$. This places every summand on the right inside $\operatorname{im}i_p\subset\mathcal O_N$. When $N=1$ both sums are empty and equal $0$.
>
> If the printed phrase includes the divisor $1$, then $i_1(f,g)=f+g$ has image the whole cusp space. For example $S_{12}(\mathrm{SL}_2(\mathbb Z))=\mathbb C\Delta\ne0$ whereas its oldspace at level $1$ is $0$. The valid equality therefore sums over divisors $m>1$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.6.2, printed p. 190 / PDF p. 204]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
