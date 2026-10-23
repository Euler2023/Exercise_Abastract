---
title: 'Exercise LA572: Trace on the Adele Algebra'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §2, Exercise 5, printed p. 373, PDF p. 392
source_refs:
- S4/ch-VI/sec-2/ex-5
created: '2026-10-23'
---

# Exercise LA572: Trace on the Adele Algebra

## Problem Statement

> [!question] Neukirch VI.2.5
> Define the trace $Tr_{L|K}:\mathbb A_L\to\mathbb A_K$ by $Tr_{L|K}(\alpha)={}$trace of the endomorphism $x\mapsto\alpha x$ of the $\mathbb A_K$-algebra $\mathbb A_L$, and show:
> (i) $Tr_{L|K}(\alpha)_{\mathfrak p}=\sum_{\mathfrak P\mid\mathfrak p}Tr_{L_{\mathfrak P}|K_{\mathfrak p}}(\alpha_{\mathfrak P})$.
> (ii) For a tower of fields $K\subseteq L\subseteq M$, one has $Tr_{M|K}=Tr_{L|K}\circ Tr_{M|L}$.
> (iii) If $L|K$ is embedded into the Galois extension $M|K$, and if $G=G(M|K)$ and $H=G(M|L)$, then one has for $\alpha\in\mathbb A_L$, $Tr_{L|K}(\alpha)=\sum_{\sigma\in G/H}\sigma\alpha$.
> (iv) $Tr_{L|K}(\alpha)=[L:K]\alpha$ for $\alpha\in\mathbb A_K$.
> (v) The trace of a principal adèle $x\in L$ is the principal adèle in $\mathbb A_K$ defined by the usual trace $Tr_{L|K}(x)$.

## Hints

> [!hint]- Hint
> Choose a $K$-basis of $L$ and use the same multiplication matrices after tensoring with $\mathbb A_K$.

> [!hint]- Stronger hint
> Use a product basis for the tower and trace the diagonal multiplication blocks; scalar and principal adeles then follow directly.

## Solution

> [!success]- Independent derivation
> The integral basis at almost all places from the preceding exercise gives, by base change, $\mathbb A_L\cong L\otimes_K\mathbb A_K$, a free $\mathbb A_K$-module of rank $[L:K]$. Thus the trace of a multiplication matrix is well-defined.
> (i) At $v$, decompose $L\otimes_KK_v=\prod_{w\mid v}L_w$. Multiplication becomes a block diagonal matrix, whose trace is the sum of the traces of its blocks, giving the required formula. The local trace of an integral element is integral, so the result is indeed an adèle.
> (ii) Choose a basis $b_i$ of $L/K$ and a basis $c_j$ of $M/L$. Then $b_ic_j$ is a basis of $M/K$. Taking the traces of the diagonal blocks first with respect to $c_j$ and then taking the trace with respect to $b_i$ gives the tower formula.
> (iii) Extensions of number fields are separable. Over $M$, the multiplication matrix diagonalizes under all $K$-embeddings, with eigenvalues $\sigma\alpha$; the embeddings correspond to $G/H$. The trace is therefore the sum of the conjugates. This can be checked in each local factor, so it also holds for adèles.
> (iv) If $\alpha$ comes from the base algebra, the multiplication matrix is $\alpha I_{[L:K]}$ and its trace is $[L:K]\alpha$.
> (v) For diagonal $x\in L$, the multiplication matrix already has entries in $M_n(K)$. After extending scalars, its trace is the diagonal embedding of $\operatorname{Tr}_{L/K}(x)\in K$. This proves all five assertions.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Modules and Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Products]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

The statement was checked against the original page image [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §2, Exercise 5, printed p.373, PDF p.392]. The solution is an independent derivation.
