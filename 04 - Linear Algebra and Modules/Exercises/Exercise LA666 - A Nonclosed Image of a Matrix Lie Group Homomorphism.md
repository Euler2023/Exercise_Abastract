---
title: "Exercise LA666: A Nonclosed Image of a Matrix Lie Group Homomorphism"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 1, Section 1.6, Exercise 17, printed p. 30, PDF p. 42"
source_refs:
  - "S10/ch-1/sec-6/ex-17"
created: 2026-11-12
---

# Exercise LA666: A Nonclosed Image of a Matrix Lie Group Homomorphism

## Problem Statement

> [!question] Original Chapter 1, Exercise 17
> Suppose $G\subset GL(n_1;\mathbb C)$ and $H\subset GL(n_2;\mathbb C)$ are matrix Lie groups and that $\Phi:G\to H$ is a Lie group homomorphism. Then the image of $G$ under $\Phi$ is a subgroup of $H$ and thus of $GL(n_2;\mathbb C)$. Is the image of $G$ under $\Phi$ necessarily a matrix Lie group? Prove or give a counter-example.

## Hints

> [!hint]- Hint 1
> A matrix Lie group must be closed relative to the ambient general linear group. A continuous homomorphism need not have closed image.

> [!hint]- Hint 2
> Use a real parameter to move around two circles with irrationally related speeds. Approach $\operatorname{diag}(1,-1)$ along parameter values for which the first circle coordinate is exactly 1.

## Solution

> [!success]- Solution
> **Proof scope:** Independent counterexample and an elementary construction of a missing limit point.
>
> Fix the irrational number $\alpha=\sqrt2$. Define
> $$
> G=\left\{A(t)=\begin{pmatrix}1&t\\0&1\end{pmatrix}:t\in\mathbb R\right\},
> \qquad
> H=\{\operatorname{diag}(z,w):|z|=|w|=1\}.
> $$
> Both are subgroups of $GL(2;\mathbb C)$. Indeed, $A(t)A(s)=A(t+s)$ and $A(t)^{-1}=A(-t)$, while diagonal unitary matrices are closed under multiplication and inversion. The group $G$ is closed: its entries satisfy $a_{11}=a_{22}=1$, $a_{21}=0$, and $\operatorname{Im}a_{12}=0$, all closed conditions. The group $H$ is closed by its diagonal and modulus-one equations. All matrices in both sets are invertible, so these are matrix Lie groups.
>
> Define
> $$
> \Phi(A(t))=\operatorname{diag}(e^{it},e^{i\alpha t}).
> $$
> The parameter $t$ is the upper-right matrix entry and hence depends continuously on $A(t)$. Thus $\Phi$ is continuous. The exponential addition law gives
> $$
> \Phi(A(t)A(s))=\Phi(A(t+s))
> =\Phi(A(t))\Phi(A(s)),
> $$
> so it is a Lie group homomorphism in Hall's sense.
>
> Let $P=\operatorname{diag}(1,-1)\in H$. This matrix is not in the image. For if $e^{it}=1$, then $t=2\pi n$ for an integer $n$. The other equation $e^{i\alpha t}=-1$ would imply
> $$
> \alpha n=m+\tfrac12
> $$
> for some integer $m$. The case $n=0$ is impossible, and $n\ne0$ would make $\alpha=(2m+1)/(2n)$ rational.
>
> We now construct image points converging to $P$. For any integer $N\ge2$, divide $[0,1)$ into $N$ equal intervals and consider the $N+1$ fractional parts of $j\alpha$ for $j=0,\ldots,N$. Two lie in one interval. Subtracting them gives integers $q_N\ne0,p_N$ with
> $$
> 0<|q_N\alpha-p_N|<\frac1N.
> $$
> The strict lower bound follows from irrationality. By changing both signs when necessary, arrange
> $$
> \delta_N=q_N\alpha-p_N\in(0,1/N).
> $$
> Choose an integer $m_N$ nearest to $1/(2\delta_N)$, and set $n_N=m_Nq_N$. Then
> $$
> \left|m_N\delta_N-\tfrac12\right|\le\frac{\delta_N}{2}\longrightarrow0,
> \qquad
> e^{2\pi i\alpha n_N}
> =e^{2\pi i m_N\delta_N}\longrightarrow-1.
> $$
> Consequently
> $$
> \Phi(A(2\pi n_N))
> =\operatorname{diag}(1,e^{2\pi i\alpha n_N})
> \longrightarrow\operatorname{diag}(1,-1)=P.
> $$
> Thus the image fails to contain an invertible limit point of its own matrices. It is not closed in $GL(2;\mathbb C)$, and therefore it is not a matrix Lie group. This answers the question negatively.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[01 - Group Theory/Concepts/Discrete and Dense Subgroups|Discrete and Dense Subgroups]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]

## Notes

- **Source status:** The complete numbered exercise was checked on the original 200 dpi page image. No hint is printed for this exercise. Hall defines a Lie group homomorphism here as a continuous group homomorphism. [S10, Definition 1.18, printed p. 22, PDF p. 34]
- **Matrix-group boundary:** The failure is closedness in the given matrix realization with its inherited topology. The construction does not require a classification of closed subgroups or any theory of immersed Lie subgroups.
- **Routing:** The counterexample is decided by convergence of finite-dimensional matrices, so it belongs to Linear Algebra and Modules.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
