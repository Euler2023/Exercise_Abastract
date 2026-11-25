---
title: "Exercise LA691: Image of the Exponential Map for SL2R"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 3, Section 3.9, Exercise 22, printed p. 75, PDF p. 87"
source_refs:
  - "S10/ch-3/sec-9/ex-22"
created: 2026-11-25
---

# Exercise LA691: Image of the Exponential Map for SL2R

## Problem Statement

> [!question] Original Chapter 3, Exercise 22
> Show that the image of the exponential map for $SL(2;\mathbb R)$ consists of precisely those matrices $A\in SL(2;\mathbb R)$ such that $\operatorname{trace}(A)>-2$, together with the matrix $-I$ (which has trace $-2$). To do this, consider the possibilities for the eigenvalues of a matrix in the Lie algebra $\mathfrak{sl}(2;\mathbb R)$ and in the group $SL(2;\mathbb R)$. In the Lie algebra, show that the eigenvalues are of the form $(\lambda,-\lambda)$ or $(i\lambda,-i\lambda)$, with $\lambda$ real. In the group, show that the eigenvalues are of the form $(a,1/a)$ or $(-a,-1/a)$, with $a$ real and positive, or of the form $(e^{i\theta},e^{-i\theta})$, with $\theta$ real. The case of a repeated eigenvalue ($(0,0)$ in the Lie algebra and $(1,1)$ or $(-1,-1)$ in the group) will have to be treated separately using the Jordan canonical form (Sect. A.4).
>
> *Hint:* You may assume that if a real matrix $X$ has real eigenvalues, then $X$ is similar *over the reals* to its Jordan canonical form. Then use the two previous exercises.

## Hints

> [!hint]- Hint 1
> The characteristic polynomial for $X\in\mathfrak{sl}(2;\mathbb R)$ has zero linear coefficient. The polynomial for $A\in SL(2;\mathbb R)$ has constant term one.

> [!hint]- Hint 2
> At a repeated Lie algebra eigenvalue, the Jordan form gives $X^2=0$. For the nonreal pair use $J^2=-I$ for the rotation generator $J$.

> [!hint]- Hint 3
> Construct a real trace-zero logarithm separately for distinct positive eigenvalues, for nonreal eigenvalues, for trace $2$, and for $-I$.

## Solution

> [!success]- Solution
> Write $G=SL(2;\mathbb R)$ and $\mathfrak g=\mathfrak{sl}(2;\mathbb R)$. Hall's Proposition 3.23 identifies $\mathfrak g$ with the real trace-zero matrices [S10, §3.4, printed p. 58, PDF p. 70]. We use the real Jordan form for real eigenvalues as permitted in the printed hint. We also use $e^{CXC^{-1}}=Ce^XC^{-1}$, which follows by applying $C(\cdot)C^{-1}$ to each power in the exponential series.
>
> **Possible eigenvalues.** For $X\in\mathfrak g$, the characteristic polynomial is $t^2+\det X$. Its two roots are $\lambda,-\lambda$ if $\det X\le0$ or $i\lambda,-i\lambda$ if $\det X>0$, with $\lambda\in\mathbb R$. They coincide only at zero. For $A\in G$, the characteristic polynomial is $t^2-\operatorname{tr}(A)t+1$. The real roots, if any, have product one and the same sign. They are $(a,1/a)$ or $(-a,-1/a)$ with $a>0$, including the repeated pairs $(1,1)$ and $(-1,-1)$. A nonreal pair has the form $(e^{i\theta},e^{-i\theta})$ by complex conjugacy and product one.
>
> **Necessity.** Let $X\in\mathfrak g$.
>
> - If $X$ has distinct real eigenvalues $\lambda,-\lambda$, it is real similar to their diagonal matrix. The trace of $e^X$ is $e^\lambda+e^{-\lambda}>2$, since $\lambda\ne0$.
> - If both eigenvalues are zero, the real Jordan form is either zero or a single size-two nilpotent block. In each case $X^2=0$, so $e^X=I+X$ has trace $2$.
> - If the eigenvalues are nonreal, Exercise 20 gives $X=C\lambda JC^{-1}$ with $J=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ and $C$ real invertible. The even and odd powers in the series, using $J^2=-I$, give
>   $$
>   e^{\lambda J}=(\cos\lambda)I+(\sin\lambda)J.
>   $$
>   Hence $\operatorname{tr}(e^X)=2\cos\lambda\ge-2$. Equality forces $\cos\lambda=-1$ and $\sin\lambda=0$, so $e^X=-I$.
>
> **Sufficiency.** Let $A\in G$ with $\operatorname{tr}(A)>-2$, or let $A=-I$.
>
> - If $\operatorname{tr}(A)>2$, the real roots are distinct and positive. Write $A=C\operatorname{diag}(a,1/a)C^{-1}$ with $a>0$ and $C$ real invertible. Then $X=C\operatorname{diag}(\log a,-\log a)C^{-1}$ is real, has trace zero, and satisfies $e^X=A$.
> - If $\operatorname{tr}(A)=2$, the eigenvalues are both $1$. The real Jordan form gives $A=I+N$ with $N^2=0$ and $\operatorname{tr}(N)=0$. This includes $N=0$. Then $N\in\mathfrak g$ and $e^N=I+N=A$.
> - If $-2<\operatorname{tr}(A)<2$, the characteristic polynomial has negative discriminant. Exercise 21 gives $A=C((\cos\theta)I+(\sin\theta)J)C^{-1}$ with real $C$ and $\theta$. The matrix $X=C\theta JC^{-1}$ is real and trace zero, and the formula for $e^{\theta J}$ gives $e^X=A$.
> - For $A=-I$, take $X=\pi J$. It has trace zero and $e^X=-I$.
>
> If $\operatorname{tr}(A)=-2$ and $A\ne-I$, the repeated eigenvalue $-1$ has a single size-two Jordan block. Such a matrix is excluded by the necessity argument, which permits trace $-2$ only for the scalar $-I$. Matrices with $\operatorname{tr}(A)<-2$ are also excluded. This proves the claimed image.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Jordan Canonical Form|Jordan Canonical Form]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Logarithms|Matrix Logarithms]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA689 - Real Normal Form for a Trace Zero Matrix|Real Normal Form for a Trace Zero Matrix]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA690 - Real Rotation Blocks in SL2R|Real Rotation Blocks in SL2R]]

## Notes

- **Source status:** The exercise, its repeated-eigenvalue clause and its printed hint were checked at 200 dpi on printed p. 75 / PDF p. 87. The classification argument is independently supplied.
- **Jordan input:** Hall states the complex Jordan form in Theorem A.7 [S10, Appendix A, §A.4, printed p. 413, PDF p. 417]. The real form used for real eigenvalues is granted by the exercise’s hint.
- **Concrete verification:** The matrices $I+E_{12}$ and $-I+E_{12}$ both have determinant one, where $E_{12}$ has a $1$ in position $(1,2)$ and zeros elsewhere. The first is $e^{E_{12}}$. The second has trace $-2$ and differs from $-I$, so it is outside the image, while $-I=e^{\pi J}$ belongs to it.
- **Routing:** The main tools are the characteristic polynomial in dimension two, real similarity and Jordan blocks, and explicit matrix exponentials.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
