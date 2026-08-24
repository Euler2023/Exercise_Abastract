---
title: Indefinite Bilinear Forms and Lorentz Groups
aliases:
  - Lorentz Groups
  - Indefinite Orthogonal Groups
  - 不定双线性型与 Lorentz 群
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
  - bilinear-forms
  - lorentz-groups
created: 2026-08-10
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, §8.2, and Ch. 9, §9.1, printed pp. 231–232 and 261–262, PDF pp. 243–244 and 273–274"
source_status: partially-verified
status: not-started
---

# Indefinite Bilinear Forms and Lorentz Groups

## Definition

For $p+q=n$, put
$$
I_{p,q}=\operatorname{diag}(I_p,-I_q).
$$
The associated symmetric bilinear form on $\mathbb R^n$ is
$$
\langle x,y\rangle_{p,q}=x^{\mathsf T}I_{p,q}y.
$$
It is **indefinite** when $p,q>0$, because $\langle x,x\rangle_{p,q}$ can be positive, negative, or zero for nonzero $x$.

The corresponding indefinite orthogonal group is
$$
O_{p,q}=\{P\in GL_n(\mathbb R):P^{\mathsf T}I_{p,q}P=I_{p,q}\}.
$$
The group $O_{3,1}$ is called the **Lorentz group** in Artin.

## Column Criterion

Write $P=(v_1\ \cdots\ v_n)$. Then the $(i,j)$ entry of $P^{\mathsf T}I_{p,q}P$ is
$$
v_i^{\mathsf T}I_{p,q}v_j=\langle v_i,v_j\rangle_{p,q}.
$$
Consequently, $P\in O_{p,q}$ exactly when
$$
\langle v_i,v_j\rangle_{p,q}=
\begin{cases}
1,&i=j\le p,\\
-1,&i=j>p,\\
0,&i\ne j.
\end{cases}
$$
Thus the columns form a basis that is orthonormal for the indefinite form, with $p$ positive and $q$ negative basis vectors.

## Lorentz Boosts

The identity $\cosh^2t-\sinh^2t=1$ yields
$$
L_t=
\begin{pmatrix}
\cosh t&\sinh t\\
\sinh t&\cosh t
\end{pmatrix}
\in O_{1,1}.
$$
Embedding this block in the first and fourth coordinates gives an element of $O_{3,1}$. Unlike ordinary orthogonal groups, Lorentz groups are generally unbounded and noncompact.

## The Group $O_{1,1}$

For
$$
P=\begin{pmatrix}a&b\\c&d\end{pmatrix},
$$
the equation $P^{\mathsf T}I_{1,1}P=I_{1,1}$ is equivalent to
$$
a^2-c^2=1,\qquad d^2-b^2=1,\qquad ab-cd=0.
$$
If $\delta=\det P\in\{1,-1\}$, comparison of the two formulas for $P^{-1}$ gives
$$
c=\delta b,qquad d=\delta a.
$$
Hence every element has the unique form
$$
P_{\delta,\varepsilon}(t)=
\varepsilon
\begin{pmatrix}
\cosh t&\sinh t\\
\delta\sinh t&\delta\cosh t
\end{pmatrix},
$$
where $\delta,\varepsilon\in\{1,-1\}$ and $t\in\mathbb R$. The two discrete invariants $\det P=\delta$ and $\operatorname{sgn}(a)=\varepsilon$ label its four path-connected components.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]

## Exercises

- [[04 - Linear Algebra and Modules/Exercises/Exercise LA3 - Columns of Lorentz Matrices|Exercise LA3]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA4 - Orthogonal and Lorentz Groups Are Not Continuously Isomorphic|Exercise LA4]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA5 - Four Components of O11|Exercise LA5]]

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The definition of $O_{3,1}$ and its extension to $O_{p,q}$ are **stated in the source**. [S1, Ch. 9, §9.1, formula (9.1.5), printed p. 262, PDF p. 274] The column criterion, boost calculation, and description of $O_{1,1}$ are proved directly above.
