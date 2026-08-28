---
title: Cyclic Vectors and Companion Matrices
aliases:
  - Cyclic Modules and Companion Matrices
  - Companion Matrix
topic: linear-algebra
tags:
  - concept
  - linear-algebra
  - cyclic-modules
  - companion-matrices
created: 2026-08-28
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, §14.8, printed pp. 433–435, PDF pp. 445–447"
source_status: verified
status: not-started
---

# Cyclic Vectors and Companion Matrices

## Definition

Let $T:V\to V$ be a linear operator over a field $F$. A vector $v\in V$ is **cyclic** if

$$
V=\operatorname{span}_F\{v,Tv,T^2v,\ldots\}.
$$

Equivalently, after making $V$ an $F[t]$-module by $t\cdot w=T(w)$, the element $v$ generates $V$ as an $F[t]$-module.

## Companion Matrix

If

$$
f(t)=t^n+a_{n-1}t^{n-1}+\cdots+a_1t+a_0
$$

and $V\cong F[t]/(f)$, then $1,t,\ldots,t^{n-1}$ is an $F$-basis. Multiplication by $t$ has companion matrix

$$
C_f=
\begin{pmatrix}
0&0&\cdots&0&-a_0\\
1&0&\cdots&0&-a_1\\
0&1&\ddots&0&-a_2\\
\vdots&\ddots&\ddots&\vdots&\vdots\\
0&\cdots&0&1&-a_{n-1}
\end{pmatrix}.
$$

Its characteristic and minimal polynomials are both $f$.

## Intuition and Key Properties

- A cyclic vector packages the whole operator into one orbit under repeated application of $T$.
- A finite-dimensional cyclic $F[t]$-module has the form $F[t]/(f)$ for one monic polynomial $f$.
- An operator is cyclic exactly when its rational canonical form has one companion block.
- For a vector $v$ in an $n$-dimensional space, cyclicity can be tested by the nonvanishing of

$$
\det(v,Tv,\ldots,T^{n-1}v).
$$

## Example

For

$$
f(t)=t^3+3t+2,
$$

the companion matrix is

$$
\begin{pmatrix}0&0&-2\\1&0&-3\\0&1&0\end{pmatrix}.
$$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The equivalence between an $F[t]$-module and a linear operator, the cyclic quotient $F[t]/(f)$, and Artin's companion-matrix convention were checked against [S1, Ch. 14, §14.8, printed pp. 433–435, PDF pp. 445–447]. The determinant test and concise interpretation are independent expansions.
