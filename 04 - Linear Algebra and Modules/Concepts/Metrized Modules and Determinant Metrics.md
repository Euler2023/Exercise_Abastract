---
title: Metrized Modules and Determinant Metrics
aliases:
  - Metrized Modules
  - Determinant Metrics
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
created: 2026-10-23
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §4, printed pp. 225–228, 231, PDF pp. 244–247, 250"
source_status: verified-bounded
---

# Metrized Modules and Determinant Metrics

## Definition

> [!info] Metrized module
> A metrized $\mathcal O_K$-module is a finitely generated module equipped on its complexification with the positive Hermitian metrics at the embeddings of $K$, compatible with the conjugation involution. Torsion disappears upon complexification. For a projective module of rank $r$, its determinant line is $\det M=\bigwedge^rM$ with the Gram determinant metric.

## Intuition

The module records the integral lattice, while its archimedean metrics measure lengths and covolumes. Algebraic tensor identities become arithmetic identities only after their metric compatibility is checked.

## Key Properties

- Orthogonal direct sums use the sum of Hermitian inner products; tensor products use their products on pure tensors.
- The exterior metric is $\langle x_1\wedge\cdots\wedge x_r,y_1\wedge\cdots\wedge y_r\rangle=\det(\langle x_i,y_j\rangle)$.
- For projective modules of ranks $r,s$, $\det(M\otimes N)\cong(\det M)^{\otimes s}\otimes(\det N)^{\otimes r}$ is an isometry with consistent basis ordering.
- For rank $n\ge1$ and $1\le p\le n$, $\det(\bigwedge^pM)\cong(\det M)^{\otimes\binom{n-1}{p-1}}$. The exponent counts the p-subsets containing a fixed basis index.

## Examples

For a rank-three orthogonal basis with Gram diagonal $a,b,c$, the second exterior power has Gram diagonal $ab,ac,bc$. Its determinant is $(abc)^2$, verifying the exponent $\binom21=2$. Degree-zero exterior powers and determinants of zero modules are interpreted as the unit line; negative-index binomial symbols need an explicit convention.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Exterior Algebra|Exterior Algebra]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]

## Exercises

```dataview
TABLE topic, status, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
SORT file.name ASC
```

## Source and Proof Status

Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §4, printed pp. 225–228, 231, PDF pp. 244–247, 250. Definitions and the cited source results were checked in bounded original-page slices. This concept distinguishes the source statements from the independent exercise proofs; the named structural theorems are cited inputs here, not reproved in full. Source issues and corrected exercise statements remain visible in the linked notes.
