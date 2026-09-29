---
title: "Exercise LA468: Coordinate Differences and Dual Bases on Trace Zero Diagonals"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - dual-bases
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XV, Exercise 26, printed p. 600, PDF p. 615"
created: 2026-09-29
---

# Exercise LA468: Coordinate Differences and Dual Bases on Trace Zero Diagonals

## Problem Statement

> [!question] Lang XV.26
> Let $\mathfrak a$ be the $\mathbb R$-vector space of real diagonal matrices with trace $0$. Let $\mathfrak a^\vee$ be the dual space. Let $\alpha_i$ $(i=1,\ldots,n-1)$ be the functional defined on an element $H=\operatorname{diag}(h_1,\ldots,h_n)$ by $\alpha_i(H)=h_i-h_{i+1}$.
>
> (a) Show that $\{\alpha_1,\ldots,\alpha_{n-1}\}$ is a basis of $\mathfrak a^\vee$ over $\mathbb R$.
>
> (b) Let $H_{i,i+1}$ be the diagonal matrix with $h_i=1$, $h_{i+1}=-1$ and $h_j=0$ for $j\ne i,i+1$. Show that $\{H_{1,2},\ldots,H_{n-1,n}\}$ is a basis of $\mathfrak a$.
>
> (c) Abbreviate $H_{i,i+1}=H_i$ $(i=1,\ldots,n-1)$. Let $\alpha_i'\in\mathfrak a^\vee$ be the functional such that $\alpha_i'(H_j)=\delta_{ij}$ ($=1$ if $i=j$ and $0$ otherwise). Thus $\{\alpha_1',\ldots,\alpha_{n-1}'\}$ is the dual basis of $\{H_1,\ldots,H_{n-1}\}$. Show that
> $$
> \alpha_i'(H)=h_1+\cdots+h_i.
> $$

## Hints

> [!hint]- Hint 1
> A trace-zero diagonal matrix with all consecutive differences zero must vanish.

> [!hint]- Hint 2
> Expand $\sum_i s_iH_i$ coordinate by coordinate. Its entries are $s_1,s_2-s_1,\ldots,s_{n-1}-s_{n-2},-s_{n-1}$.

## Solution

> [!success]- Independent derivation
> Identify diagonal matrices with their diagonal vectors in $\mathbb R^n$. The trace map is the nonzero functional $(h_1,\ldots,h_n)\mapsto\sum_i h_i$, so its kernel $\mathfrak a$ has dimension $n-1$.
>
> (a) Consider $D:\mathfrak a\to\mathbb R^{n-1}$ with coordinates $\alpha_i(H)$. If $D(H)=0$, all the $h_i$ have a common value $c$, and $0=\operatorname{tr}H=nc$ forces $c=0$. Thus $D$ is injective, hence an isomorphism between spaces of equal dimension. Pulling back the coordinate functionals gives a basis $\alpha_1,\ldots,\alpha_{n-1}$ of $\mathfrak a^\vee$.
>
> (b) For $H=\operatorname{diag}(h_1,\ldots,h_n)\in\mathfrak a$, set $s_i=\sum_{j=1}^i h_j$. Direct evaluation of diagonal entries gives
> $$
> H=\sum_{i=1}^{n-1}s_iH_i.
> $$
> Indeed the first entry is $s_1=h_1$, each middle entry is $s_i-s_{i-1}=h_i$, and the last is $-s_{n-1}=h_n$ by trace zero. These $n-1$ matrices span a space of dimension $n-1$, so form a basis.
>
> (c) Applying the dual basis functional $\alpha_i'$ to this expansion gives $\alpha_i'(H)=s_i=h_1+\cdots+h_i$. Equivalently, the sum of the first $i$ diagonal entries of $H_j$ is $1$ precisely when $i=j$ and is otherwise zero.
>
> For $n=1$, both vector spaces are zero and all the displayed bases are empty; the assertions remain valid.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Hom Functor|Hom Functor]]
- [[06 - Representation Theory/Concepts/Root Systems|Root Systems]]
- [[06 - Representation Theory/Concepts/Weights and Weight Spaces|Weights and Weight Spaces]]

## Notes

- Source: [S2, Ch. XV, Exercise 26, printed p. 600, PDF p. 615], visually verified.
- The primes in $\alpha_i'$ distinguish the basis dual to $H_i$ from the consecutive-difference basis $\alpha_i$. In general these two bases of the dual space are different.
- Proof inputs are rank-nullity and elementary dual-basis identities. The root/weight links provide context; no representation-theoretic theorem is needed. The shared [JoL 01] reference is not a proof input here.
