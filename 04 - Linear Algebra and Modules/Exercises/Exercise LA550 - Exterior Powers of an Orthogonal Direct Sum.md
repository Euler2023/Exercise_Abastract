---
title: 'Exercise LA550: Exterior Powers of an Orthogonal Direct Sum'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §4, Exercise 2, printed p. 233, PDF p. 252
source_refs:
- S4/ch-III/sec-4/ex-2
created: '2026-10-23'
---

# Exercise LA550: Exterior Powers of an Orthogonal Direct Sum

## Problem Statement

> [!question] Neukirch III.4.2
> For any two projective metrized $\mathfrak o$-modules $M,N$, one has
> $$
> \bigwedge^n(M\oplus N)\simeq\bigoplus_{i+j=n}\bigwedge^iM\otimes\bigwedge^jN.
> $$

## Hints

> [!hint]- Hint 1
> Map from right to left by taking the exterior product, placing the exterior vectors from $M$ before those from $N$. Use local bases to verify that this is an isomorphism.

> [!hint]- Hint 2
> Distinct $(i,j)$ components are orthogonal. For the same $(i,j)$, the Gram matrix is block diagonal with blocks from $M,N$; its determinant is the product of the two exterior-power inner products.

## Solution

> [!success]- Independent derivation
> Let $n\ge0$. For $i+j=n$, define
> $$
> \begin{aligned}
> \psi_{i,j}:\bigwedge^iM\otimes\bigwedge^jN&\longrightarrow\bigwedge^n(M\oplus N),\\
> (m_1\wedge\cdots\wedge m_i)\otimes(n_1\wedge\cdots\wedge n_j)&\longmapsto
> (m_1,0)\wedge\cdots\wedge(m_i,0)\wedge(0,n_1)\wedge\cdots\wedge(0,n_j).
> \end{aligned}
> $$
> Alternation and balancing make this well-defined. Add these maps to obtain $\psi$.
>
> **Algebraic isomorphism.** At each prime ideal, the projective modules are free after localization. Choose local bases $e_1,\ldots,e_r$ and $f_1,\ldots,f_s$. The exterior-power basis of the direct sum consists of the ordered subsets $e_I\wedge f_J$ with $|I|+|J|=n$. These are precisely the images under $\psi$ of the bases on the right. Thus every localization is an isomorphism, and the local criterion applied to the kernel and cokernel of a map of finite modules gives the global isomorphism.
>
> **Preservation of the metric.** The exterior-power metric is defined by the Gram determinant [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §4, printed p. 228, PDF p. 247]. The spaces $M_{\mathbb C}$ and $N_{\mathbb C}$ are orthogonal in the direct sum. When comparing $(i,j)$ and $(i',j')$ with $i\ne i'$, the cross terms between $M$ and $N$ in the Gram matrix vanish. The numbers of rows and columns from the two orthogonal spaces do not match, so the matrix has rank less than $n$ and its determinant is zero. Thus distinct components are orthogonal.
>
> If $(i,j)=(i',j')$, the Gram matrix is block diagonal, so
> $$
> \begin{aligned}
> \langle\psi_{i,j}(m\otimes n),\psi_{i,j}(m'\otimes n')\rangle
> &=\det(\langle m_a,m'_b\rangle)\det(\langle n_c,n'_d\rangle)\\
> &=\langle m,m'\rangle_{\wedge^iM}\langle n,n'\rangle_{\wedge^jN}.
> \end{aligned}
> $$
> This is the tensor product metric on the right. Sesquilinear extension and the orthogonality of distinct components show that $\psi$ is an isometry. The map commutes with $F$ and is independent of the local bases, so it is a canonical isometry.
>
> If $n=0$, both sides are $\mathfrak o$; if $n>r+s$, both sides are zero. The argument and conclusion remain valid in these cases.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Metrized Modules and Determinant Metrics|Metrized Modules and Determinant Metrics]]

- [[04 - Linear Algebra and Modules/Concepts/Exterior Algebra|Exterior Algebra]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Hermitian Forms]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §4, Exercise 2, printed p. 233, PDF p. 252]. Independent derivation using local bases and Gram determinants, covering both the algebraic isomorphism and the metrics.
- **Convention:** $\bigwedge^0M=\mathfrak o$, and exterior powers above the rank vanish. The right side carries the orthogonal direct sum and tensor product metrics; an isomorphism of modules without a metric check would not suffice.
