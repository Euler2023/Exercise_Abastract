---
title: "Exercise LA388: Constant Fibre Dimension over a Reduced Local Ring"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - local-rings
  - free-modules
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. X, Exercise 15, printed pp. 444-445, PDF pp. 459-460"
created: 2026-09-22
---

# Exercise LA388: Constant Fibre Dimension over a Reduced Local Ring

## Problem Statement

> [!question] Exercise 15
> Let $A$ be a Noetherian local ring. Let $E$ be a finite $A$-module. Assume that $A$ has no nilpotent elements. For each prime ideal $\mathfrak p$ of $A$, let $k(\mathfrak p)$ be the residue class field. If $\dim_{k(\mathfrak p)}E_{\mathfrak p}/\mathfrak pE_{\mathfrak p}$ is constant for all $\mathfrak p$, show that $E$ is free.
>
> **Printed hint.** Let $x_1,\ldots,x_r\in A$ be such that the residue classes mod the maximal ideal form a basis for $E/\mathfrak mE$ over $k(\mathfrak m)$. We get a surjective homomorphism
>
> $$
> A^r\longrightarrow E\longrightarrow0.
> $$
>
> Let $J$ be the kernel. Show that $J_{\mathfrak p}\subset\mathfrak m_{\mathfrak p}A_{\mathfrak p}^r$ for all $\mathfrak p$ so $J\subset\mathfrak p$ for all $\mathfrak p$ and $J=0$.

> [!warning] Source issue: the printed hint has two type errors
> The basis lifts must lie in $E$, so the printed $x_1,\ldots,x_r\in A$ must be read as $x_1,\ldots,x_r\in E$. Also $J$ is a submodule of $A^r$, so the printed $J\subset\mathfrak p$ means $J\subset\mathfrak pA^r$. Here $\mathfrak m_{\mathfrak p}=\mathfrak pA_{\mathfrak p}$. The exercise's conclusion needs no alteration.

## Hints

> [!hint]- Hint 1
> Lift a basis of $E/\mathfrak mE$ and use Nakayama to obtain $A^r\twoheadrightarrow E$. At each prime, its map on residue fields is a surjection between vector spaces of dimension $r$.

> [!hint]- Hint 2
> A vector in the kernel has every coordinate in every prime ideal of $A$. Use reducedness to make each coordinate zero; do not assume that tensoring the kernel inclusion with a residue field stays injective.

## Solution

> [!success]- Independently derived solution
> Write $\mathfrak m$ for the maximal ideal and $r$ for the common fibre dimension. We use the following elementary local form of Nakayama: if a finite module $Q$ satisfies $Q=\mathfrak mQ$, then $Q=0$. To see this, choose generators $q_1,\ldots,q_s$ and express $q_i=\sum_jc_{ij}q_j$ with every $c_{ij}\in\mathfrak m$. Multiplication by the adjugate of $I-(c_{ij})$ shows that $\det(I-(c_{ij}))$ annihilates every $q_i$. This determinant belongs to $1+\mathfrak m$, hence is a unit, so all generators vanish.
>
> Choose $x_1,\ldots,x_r\in E$ lifting a basis of $E/\mathfrak mE$. The quotient $Q=E/\sum_jAx_j$ is finite and satisfies $Q=\mathfrak mQ$, hence is zero. Thus the map
>
> $$
> \pi:A^r\twoheadrightarrow E,\qquad e_j\longmapsto x_j
> $$
>
> is surjective. Put $J=\ker\pi$. For every prime $\mathfrak p$, localization followed by passage to the residue field gives a surjection
>
> $$
> k(\mathfrak p)^r\twoheadrightarrow
> E_{\mathfrak p}/\mathfrak pE_{\mathfrak p}.
> $$
>
> The target has dimension $r$ by hypothesis, so this is an isomorphism. Consequently every element of $J_{\mathfrak p}$ has zero image in $k(\mathfrak p)^r$, which means
>
> $$
> J_{\mathfrak p}\subseteq\mathfrak pA_{\mathfrak p}^r.
> $$
>
> Take $v=(a_1,\ldots,a_r)\in J$. Then $a_j/1\in\mathfrak pA_{\mathfrak p}$ for every prime $\mathfrak p$. The contraction of $\mathfrak pA_{\mathfrak p}$ to $A$ is $\mathfrak p$: if $sa_j\in\mathfrak p$ for $s\notin\mathfrak p$, primality forces $a_j\in\mathfrak p$. Therefore
>
> $$
> a_j\in\bigcap_{\mathfrak p\in\operatorname{Spec}A}\mathfrak p
> =\sqrt{(0)}=(0).
> $$
>
> For completeness, the equality with the nilradical follows because nilpotent elements belong to every prime, whereas a nonnilpotent element $a$ is avoided by some prime. Indeed, choose by Zorn's lemma an ideal maximal among those disjoint from $\{1,a,a^2,\ldots\}$. If $xy$ belongs to it but neither $x$ nor $y$ does, the two larger ideals obtained by adjoining $x$ and $y$ each contain a power of $a$; multiplying those two expressions gives a power of $a$ in the original ideal, a contradiction. Thus the maximal disjoint ideal is prime.
>
> Reducedness now gives $v=0$. Hence $J=0$ and $E\cong A^r$. This also covers $r=0$, when Nakayama already gives $E=0$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Module Support and Fibers|Module Support and Fibers]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules and Nakayama's Lemma]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Localization of Modules|Localization of Modules]]
- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]

## Notes

- **Source status:** The statement and the complete printed hint were checked on the original page images at [S2, Ch. X, Ex. 15, printed pp. 444-445, PDF pp. 459-460]. The proof above is independent.
- **Boundary:** Reducedness matters. For $A=k[\varepsilon]/(\varepsilon^2)$ and $E=A/(\varepsilon)$ there is only one prime, hence constant fibre dimension $1$, but $E$ is not free: its nonzero annihilator is $(\varepsilon)$, whereas a nonzero free module has zero annihilator.
- **Method:** Nakayama and the nilradical characterization are proved in the solution. No flatness criterion is assumed.
