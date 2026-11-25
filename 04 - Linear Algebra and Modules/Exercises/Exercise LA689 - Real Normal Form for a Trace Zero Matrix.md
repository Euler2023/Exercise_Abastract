---
title: "Exercise LA689: Real Normal Form for a Trace Zero Matrix"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 3, Section 3.9, Exercise 20, printed p. 75, PDF p. 87"
source_refs:
  - "S10/ch-3/sec-9/ex-20"
created: 2026-11-25
---

# Exercise LA689: Real Normal Form for a Trace Zero Matrix

## Problem Statement

> [!question] Original Chapter 3, Exercise 20
> Suppose $X$ is a $2\times2$ real matrix with trace zero, and assume $X$ has a nonreal eigenvalue.
>
> **(a)** Show that the eigenvalues of $X$ must be of the form $ia,-ia$ with $a$ a nonzero real number.
>
> **(b)** Show that the corresponding eigenvectors of $X$ can be chosen to be complex conjugates of each other, say, $v$ and $\bar v$.
>
> **(c)** Show that there exists an invertible real matrix $C$ such that
> $$
> X=C\begin{pmatrix}0&a\\-a&0\end{pmatrix}C^{-1}.
> $$
>
> *Hint:* Use $v$ and $\bar v$ to construct a real basis for $\mathbb R^2$, and determine the matrix $X$ in this basis.

## Hints

> [!hint]- Hint 1
> The characteristic polynomial has real coefficients and linear coefficient equal to zero.

> [!hint]- Hint 2
> Write the eigenvector for $ia$ as $p+iq$ with $p,q$ real. Compare real and imaginary parts of the eigenvector equation.

> [!hint]- Hint 3
> The two conjugate eigenvectors belong to distinct eigenvalues. Their linear independence forces $p,q$ to be a basis.

## Solution

> [!success]- Solution
> **(a)** The real characteristic polynomial has degree two, so its two roots are a nonreal number $\lambda$ and its conjugate $\bar\lambda$. Their sum is $\operatorname{tr}X=0$. Therefore $2\operatorname{Re}\lambda=0$ and $\lambda=ia$ for a nonzero real $a$.
>
> **(b)** Choose a nonzero complex eigenvector $v$ with $Xv=ia v$. Since the entries of $X$ are real, complex conjugation gives $X\bar v=-ia\bar v$. Thus $v,\bar v$ are eigenvectors for the two distinct eigenvalues and are linearly independent over $\mathbb C$.
>
> **(c)** Write $v=p+iq$ and $\bar v=p-iq$ with $p,q\in\mathbb R^2$. The complex span of $p,q$ contains the independent vectors $v,\bar v$, so $p,q$ are independent over $\mathbb C$ and hence over $\mathbb R$. Expanding the equation $X(p+iq)=ia(p+iq)$ gives
> $$
> Xp=-a q,\qquad Xq=a p.
> $$
> With $C$ the real invertible matrix whose columns are $p,q$, these column identities give
> $$
> XC=C\begin{pmatrix}0&a\\-a&0\end{pmatrix}.
> $$
> Multiplying by $C^{-1}$ yields the required real normal form.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** The complete statement, its three parts, and the printed hint were checked at 200 dpi on printed p. 75 / PDF p. 87. The solution is independently derived.
- **Concrete verification:** For $X=\begin{pmatrix}0&4\\-1&0\end{pmatrix}$, the vector $(2,i)^{\mathsf T}$ has eigenvalue $2i$. The real change of basis $C=\operatorname{diag}(2,1)$ gives $C^{-1}XC=\begin{pmatrix}0&2\\-2&0\end{pmatrix}$.
- **Basis convention:** The real basis is ordered as $(\operatorname{Re}v,\operatorname{Im}v)$, giving the upper-right entry $+a$.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
