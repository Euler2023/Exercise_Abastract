---
title: Jordan Canonical Form
aliases:
  - Jordan Form
  - Jordan Blocks
topic: linear-algebra
tags:
  - concept
  - linear-algebra
  - jordan-form
  - linear-operators
created: 2026-08-28
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, §14.8 and Ex. 8.2, printed pp. 433–435 and 440, PDF pp. 445–447 and 452"
source_status: verified
status: not-started
---

# Jordan Canonical Form

## Definition

A Jordan block of size $n$ with eigenvalue $\lambda$ is

$$
J_n(\lambda)=
\begin{pmatrix}
\lambda&1&0&\cdots&0\\
0&\lambda&1&\ddots&\vdots\\
\vdots&\ddots&\ddots&\ddots&0\\
0&\cdots&0&\lambda&1\\
0&\cdots&\cdots&0&\lambda
\end{pmatrix}.
$$

Over an algebraically closed field, every finite-dimensional linear operator is similar to a direct sum of Jordan blocks.

## Module Interpretation

Under the correspondence $t\cdot v=T(v)$, the block $J_n(\lambda)$ corresponds to the cyclic primary module

$$
F[t]/(t-\lambda)^n.
$$

The ordered basis

$$
(t-\lambda)^{n-1},(t-\lambda)^{n-2},\ldots,1
$$

is a Jordan chain. Thus block size records the exponent of a primary cyclic summand.

## Key Properties

- A block is diagonal exactly when its size is one.
- The number of Jordan blocks for $\lambda$ is $\dim\ker(T-\lambda I)$.
- The largest block size is the exponent of $t-\lambda$ in the minimal polynomial.
- A nilpotent operator with square zero has only blocks of sizes one and two.

## Example

Multiplication by $t$ on $F[t]/(t-\lambda)^3$ has one block $J_3(\lambda)$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Cyclic Vectors and Companion Matrices|Cyclic Vectors and Companion Matrices]]
- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The module–operator correspondence and the cyclic primary model were checked against [S1, Ch. 14, §14.8 and Ex. 8.2, printed pp. 433–435 and 440, PDF pp. 445–447 and 452]. The full algebraically closed-field classification and kernel/minimal-polynomial properties are standard external inputs summarized here.
