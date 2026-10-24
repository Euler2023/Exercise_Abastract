---
title: 'Exercise LA551: Determinant Lines of Tensor Products'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §4, Exercise 3, printed p. 233, PDF p. 252
source_refs:
- S4/ch-III/sec-4/ex-3
created: '2026-10-23'
---

# Exercise LA551: Determinant Lines of Tensor Products

## Problem Statement

> [!question] Neukirch III.4.3
> For any two projective metrized $\mathfrak o$-modules $M,N$, one has
> $$
> \det(M\otimes_{\mathfrak o}N)\simeq(\det M)^{\otimes\operatorname{rk}(N)}\otimes_{\mathfrak o}(\det N)^{\otimes\operatorname{rk}(M)}.
> $$

## Hints

> [!hint]- Hint 1
> Choose local bases of ranks $r,s$ and order $e_a\otimes f_b$ lexicographically. Compare the basis vectors of the determinant lines on both sides.

> [!hint]- Hint 2
> The change-of-basis matrix is the Kronecker product $A\otimes B$. Factor it as $(A\otimes I_s)(I_r\otimes B)$; its determinant is $(\det A)^s(\det B)^r$.

> [!hint]- Hint 3
> The Gram matrix of the tensor product basis is $H_M\otimes H_N$. The same determinant identity gives preservation of the metrics.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Let $r=\operatorname{rk}M$ and $s=\operatorname{rk}N$. First suppose $r,s>0$. On a localization where both modules are free, choose bases $e_1,\ldots,e_r$ and $f_1,\ldots,f_s$, and order the tensor product basis lexicographically in $(a,b)$. Define the determinant-line map by sending
> $$
> \bigwedge_{a=1}^{r}\bigwedge_{b=1}^{s}(e_a\otimes f_b)
> \longmapsto
> (e_1\wedge\cdots\wedge e_r)^{\otimes s}\otimes(f_1\wedge\cdots\wedge f_s)^{\otimes r}.
> $$
> This is an isomorphism of local modules of rank one.
>
> **Independence of the bases.** Let the two change-of-basis matrices be $A\in\mathrm{GL}_r$ and $B\in\mathrm{GL}_s$. The tensor product matrix is $A\otimes B$. We have
> $$
> A\otimes B=(A\otimes I_s)(I_r\otimes B).
> $$
> The matrix $I_r\otimes B$ is block diagonal with $r$ copies of $B$. After the same permutation of rows and columns, $A\otimes I_s$ is block diagonal with $s$ copies of $A$. Hence
> $$
> \det(A\otimes B)=(\det A)^s(\det B)^r.
> $$
> Under a change of bases, the generators on the left and right are multiplied by the same unit. The local definitions therefore agree on overlaps and glue to a global isomorphism.
>
> **Preservation of the metrics.** In each embedding component, let $H=(\langle e_a,e_{a'}\rangle)$ and $J=(\langle f_b,f_{b'}\rangle)$ be the Gram matrices. The tensor basis then has Gram matrix $H\otimes J$. The squared norm of the generator on the left is
> $$
> \det(H\otimes J)=(\det H)^s(\det J)^r.
> $$
> Under the determinant and tensor product metrics, the generator on the right has the same squared norm. For one-dimensional Hermitian spaces, equality of the norms of nonzero generators ensures that the linear isomorphism is an isometry. The construction is defined over $\mathfrak o$, so it commutes with $F$. The required metrics are defined in [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §4, printed pp. 228,231, PDF pp. 247,250].
>
> If $r=0$ or $s=0$, the corresponding projective module is zero, $\det0=\bigwedge^00=\mathfrak o$, and the zeroth tensor power is also $\mathfrak o$. The standard isometry of unit lines identifies both sides, so the conclusion still holds.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Metrized Modules and Determinant Metrics|Metrized Modules and Determinant Metrics]]

- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[04 - Linear Algebra and Modules/Concepts/Exterior Algebra|Exterior Algebra]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Hermitian Forms]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §4, Exercise 3, printed p. 233, PDF p. 252]. Independent local construction, gluing under changes of bases, and metric verification; the Kronecker determinant identity is also derived.
- **Convention:** Fixing the lexicographic order of the tensor basis determines this particular isomorphism. Any comparison with a formula obtained from a different ordering must include the corresponding permutation sign.
