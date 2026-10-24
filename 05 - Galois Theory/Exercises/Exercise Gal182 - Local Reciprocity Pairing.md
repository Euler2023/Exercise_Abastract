---
title: 'Exercise Gal182: Local Reciprocity Pairing'
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §1, Exercise 2, printed p. 325, PDF p. 344
source_refs:
- S4/ch-V/sec-1/ex-2
created: '2026-10-23'
---

# Exercise Gal182: Local Reciprocity Pairing

## Problem Statement

> [!question] Neukirch V.1.2
> For an arbitrary field $K$ and a $G_K$-module $A$, put $H^1(K,A)=H^1(G_K,A)$. If $K$ is a $p$-adic number field and $n$ a natural number, then there exists a nondegenerate pairing
> $$
> H^1(K,\mathbb Z/n\mathbb Z)\times H^1(K,\mu_n)\longrightarrow\mathbb Z/n\mathbb Z
> $$
> of finite groups given by $(\chi,a)\mapsto\chi((a,\overline K/K))$. If $p\nmid n$, the orthogonal complement of
> $$
> H^1_{\rm nr}(K,\mathbb Z/n\mathbb Z):=H^1(G(\widetilde K/K),\mathbb Z/n\mathbb Z)\subseteq H^1(K,\mathbb Z/n\mathbb Z)
> $$
> is $H^1_{\rm nr}(K,\mu_n)=H^1(G(\widetilde K/K),\mu_n)$.

## Hints

> [!hint]- Hint 1
> Use Kummer theory on the second factor and local reciprocity on the first.

> [!hint]- Hint 2
> An unramified character evaluates on $\operatorname{rec}_K(a)$ as $v_K(a)\chi(\varphi_K)$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Write $B=K^*/K^{*n}$. The structure $K^*\cong\pi^{\mathbb Z}\times\mu_{q-1}\times U_K^{(1)}$, with $U_K^{(1)}$ a finite torsion group times a free $\mathbb Z_p$-module of finite rank, shows that $B$ is finite. Kummer theory gives $H^1(K,\mu_n)=B$. Local reciprocity and its existence theorem identify continuous $\mathbb Z/n\mathbb Z$-valued characters of $G_K$ with $\operatorname{Hom}(B,\mathbb Z/n\mathbb Z)$: the character is composed with $\operatorname{rec}_K$; conversely every character of the finite quotient $B$ defines a finite abelian extension by the existence theorem.
>
> The stated pairing is consequently the evaluation pairing $B^\vee\times B\to\mathbb Z/n\mathbb Z$. A finite abelian group of exponent dividing $n$ is a product of cyclic groups of orders dividing $n$; on each cyclic factor its characters separate points and have the same number of elements. This proves perfection on both sides.
>
> For an unramified character, reciprocity sends $a$ to $\varphi_K^{v_K(a)}$ in the unramified quotient. Such characters take every value on $\varphi_K$, by Exercise 1. Hence $a$ annihilates all of them exactly when $n\mid v_K(a)$, equivalently $a\in U_KK^{*n}$. When $p\nmid n$, Exercise 1 identifies these classes with $H^1_{\rm nr}(K,\mu_n)$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local fields]]
- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois theory]]
- [[05 - Galois Theory/Concepts/Kummer Extensions|Kummer theory]]

## Notes

Original statement: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §1, Exercise 2, printed p. 325, PDF p. 344]. Independent derivation. Inputs are the already proved local reciprocity and existence theorems V (1.3)–(1.4), printed pp. 320–322, PDF pp. 339–341; the finite structure of local unit groups is II (5.7). This proof does not use general local Tate duality.
