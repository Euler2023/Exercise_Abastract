---
title: "Exercise MF37: Homeomorphism of the Elliptic Quotient Chart"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 2, Section 2.2, Exercise 2.2.5, printed p. 52, PDF p. 67"
source_refs:
  - "S7/ch-2/sec-2/ex-5"
created: 2026-10-28
---

# Exercise MF37: Homeomorphism of the Elliptic Quotient Chart

## Problem Statement

> [!question] Original Exercise 2.2.5
> Explain why $\varphi:\pi(U)\longrightarrow V$ as defined in the section is a homeomorphism. (A hint for this exercise is at the end of the book.)
>
> **Construction in Section 2.2, printed pp. 49–50 / PDF pp. 64–65.** Fix $\tau_0\in\mathcal H$ and a congruence subgroup $\Gamma\subseteq SL_2(\mathbb Z)$. Let $h=|\{\pm I\}\Gamma_{\tau_0}/\{\pm I\}|$. Choose an open neighborhood $U$ of $\tau_0$ such that $g(U)\cap U\ne\varnothing$ implies $g\in\Gamma_{\tau_0}$. Define
> $$
> \delta(z)=\frac{z-\tau_0}{z-\bar\tau_0},\qquad
> \psi(z)=(\delta(z))^h,\qquad V=\psi(U).
> $$
> The natural projection is $\pi:\mathcal H\to Y(\Gamma)$. The section constructs a bijection $\varphi:\pi(U)\to V$ characterized by $\varphi\circ\pi|_U=\psi$. Verify the claimed homeomorphism.

## Hints

> [!hint]- Hint 1
> Use that $\pi|_U$ is an open continuous surjection. In particular it is a quotient map onto $\pi(U)$ with its subspace topology.

> [!hint]- Hint 2
> The function $\psi$ is continuous and open. Deduce continuity of $\varphi$ by taking inverse images under $\pi|_U$, and openness of $\varphi$ by writing $\varphi(A)=\psi((\pi|_U)^{-1}(A))$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent proof of the homeomorphism claim. The imported complex-analysis input is the Open Mapping Theorem: a nonconstant holomorphic function on a domain maps open sets to open sets. The finite cyclic stabilizer input is Proposition 2.2.2, stated on printed p. 48 / PDF p. 63 and established in Section 2.3, notably Corollary 2.3.5 on printed p. 56 / PDF p. 71.
>
> **The identified fibers.** The denominator of $\delta$ never vanishes on $\mathcal H$, and $\delta$ is a nonconstant fractional linear map. Every element of $\Gamma_{\tau_0}$ fixes both $\tau_0$ and $\bar\tau_0$, since it has real coefficients. Conjugating by $\delta$ therefore gives fractional linear transformations fixing $0$ and $\infty$, hence multiplications $w\mapsto aw$. Their effective group is finite cyclic of order $h$, so its multipliers are exactly the $h$th roots of unity.
>
> For $z_1,z_2\in U$, equality of their $\Gamma$-orbits means $z_1=gz_2$ for some $g\in\Gamma$. Then $g(U)\cap U\ne\varnothing$, forcing $g\in\Gamma_{\tau_0}$. Conversely every relation by an element of $\Gamma_{\tau_0}$ is a relation by $\Gamma$. Thus
> $$
> \begin{aligned}
> \pi(z_1)=\pi(z_2)
> &\Longleftrightarrow \delta(z_1)=\zeta\delta(z_2)\text{ for some }\zeta^h=1\\
> &\Longleftrightarrow (\delta(z_1))^h=(\delta(z_2))^h\\
> &\Longleftrightarrow \psi(z_1)=\psi(z_2).
> \end{aligned}
> $$
> The equivalence also holds when a $\delta(z_j)$ is zero, since the power is zero exactly at zero. Hence $\varphi(\pi(z))=\psi(z)$ is well defined and injective. It is surjective by the definition $V=\psi(U)$.
>
> **The two open continuous maps.** Put $q=\pi|_U$. The map $q:U\to\pi(U)$ is continuous. If $W\subseteq U$ is open, it is open in $\mathcal H$, because $U$ is open. The orbit saturation
> $$
> \pi^{-1}(\pi(W))=\bigcup_{g\in\Gamma}g(W)
> $$
> is open, so $q(W)=\pi(W)$ is open in $Y(\Gamma)$ and hence in $\pi(U)$. Thus $q$ is an open continuous surjection and a quotient map onto the stated subspace topology.
>
> The map $\psi$ is holomorphic on $\mathcal H$, nonconstant, and continuous. By the Open Mapping Theorem, it is open on $U$, so $V=\psi(U)$ is open in $\mathbb C$.
>
> **Continuity of $\varphi$.** If $B\subseteq V$ is open, then
> $$
> q^{-1}(\varphi^{-1}(B))=\psi^{-1}(B)
> $$
> is open in $U$. Since $q$ is a quotient map, $\varphi^{-1}(B)$ is open in $\pi(U)$. This proves continuity.
>
> **Continuity of the inverse.** If $A\subseteq\pi(U)$ is open, then $q^{-1}(A)$ is open in $U$. Moreover, using surjectivity of $q$ and the relation $\varphi q=\psi$ gives
> $$
> \varphi(A)=\psi(q^{-1}(A)).
> $$
> This is open in $V$, because $\psi$ is open. Hence $\varphi$ is an open bijection as well as continuous, and $\varphi^{-1}$ is continuous. This is the desired homeomorphism.

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]
- [[07 - Modular Forms/Concepts/Modular Curves and Moduli|Modular Curves and Moduli]]
- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]

## Notes

- **Source status:** The original exercise was checked on the 200 dpi image of printed p. 52 / PDF p. 67. The complete defining construction and its same-fiber calculation were checked on printed pp. 49–50 / PDF pp. 64–65. The proof is independently derived.
- **Proof boundary:** A continuous bijection alone does not establish the result. The proof separately verifies both continuity and openness using $q$ and $\psi$. The stabilizer theorem is a named input; its two assigned verification parts are independently completed in [[07 - Modular Forms/Exercises/Exercise MF2 - Fundamental Domain|Exercise MF2]].
- **Case $h=1$:** The same proof applies at a nonelliptic point: the power map is the identity and no branch identification occurs.
- **Figures:** No source figure is needed to prove this topological statement; the exact formulas provide its full construction.
- **Routing:** This exercise verifies the topology of the explicit modular-curve coordinate chart, so it belongs to Modular Forms.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
