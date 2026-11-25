---
title: "Exercise LA690: Real Rotation Blocks in SL2R"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 3, Section 3.9, Exercise 21, printed p. 75, PDF p. 87"
source_refs:
  - "S10/ch-3/sec-9/ex-21"
created: 2026-11-25
---

# Exercise LA690: Real Rotation Blocks in SL2R

## Problem Statement

> [!question] Original Chapter 3, Exercise 21
> Suppose $A$ is a $2\times2$ real matrix with determinant one, and assume $A$ has a nonreal eigenvalue. Show that there exists a real number $\theta$ that is not an integer multiple of $\pi$ and an invertible real matrix $C$ such that
> $$
> A=C\begin{pmatrix}\cos\theta&\sin\theta\\-\sin\theta&\cos\theta\end{pmatrix}C^{-1}.
> $$

## Hints

> [!hint]- Hint 1
> Express the determinant using the conjugate pair of eigenvalues.

> [!hint]- Hint 2
> Use real and imaginary parts of an eigenvector for $e^{i\theta}$ to form the two columns of $C$.

## Solution

> [!success]- Solution
> Let $\lambda$ be a nonreal eigenvalue. Since the characteristic polynomial is real of degree two, the other eigenvalue is $\bar\lambda$. The determinant condition gives $\lambda\bar\lambda=1$, so $\lambda=e^{i\theta}$ for some real $\theta$. Since $\lambda$ is nonreal, $\theta\notin\pi\mathbb Z$.
>
> Choose a nonzero eigenvector $v=p+iq$ for $e^{i\theta}$ with $p,q\in\mathbb R^2$. The conjugate $\bar v=p-iq$ is an eigenvector for $e^{-i\theta}$. As in Chapter 3, Exercise 20, these vectors are linearly independent over $\mathbb C$ because their eigenvalues are distinct. Since $p,q$ span them over $\mathbb C$, the two real vectors form a basis of $\mathbb R^2$.
>
> Comparing real and imaginary parts in
> $$
> A(p+iq)=(\cos\theta+i\sin\theta)(p+iq)
> $$
> gives
> $$
> Ap=(\cos\theta)p-(\sin\theta)q,\qquad
> Aq=(\sin\theta)p+(\cos\theta)q.
> $$
> Thus with $C$ having columns $p,q$, these equations give the two columns of
> $$
> C^{-1}AC=\begin{pmatrix}\cos\theta&\sin\theta\\-\sin\theta&\cos\theta\end{pmatrix}.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA689 - Real Normal Form for a Trace Zero Matrix|Real Normal Form for a Trace Zero Matrix]]

## Notes

- **Source status:** The complete statement and rotation block were checked at 200 dpi on printed p. 75 / PDF p. 87. The solution independently applies the real-basis construction used for Exercise 20.
- **Concrete verification:** For $A=\begin{pmatrix}0&2\\-1/2&0\end{pmatrix}$, take $\theta=\pi/2$ and $v=(2,i)^{\mathsf T}$. Direct multiplication gives $A v=iv$ and $C^{-1}AC=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ for $C=\operatorname{diag}(2,1)$.
- **Routing:** The proof uses complex conjugate eigenvalues and a real change of basis in dimension two.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
