---
title: "Exercise LA596: Cyclotomic Module Bases for Finite Order Matrices"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 2, Section 2.3, Exercise 2.3.4, printed p. 56, PDF p. 71; Proposition 2.3.3, printed pp. 54–55, PDF pp. 69–70; Appendix A hint, printed p. 415, PDF p. 426"
source_refs:
  - "S7/ch-2/sec-3/ex-4"
created: 2026-10-28
---

# Exercise LA596: Cyclotomic Module Bases for Finite Order Matrices

## Problem Statement

> [!question] Original Exercise 2.3.4
> (a) In the proof of Proposition 2.3.3, why does the condition $L=\mathbb Zu+\mathbb Zv$ imply $\det[u\ v]=\pm1$?
>
> (b) Prove the other two parts of Proposition 2.3.3. (Hints for this exercise are at the end of the book.)
>
> **Referenced context.** Here $L=\mathbb Z^2$ is the lattice of integral column vectors and $[u\ v]$ is the matrix with columns $u,v$. The two assigned parts of Proposition 2.3.3, printed p. 54 / PDF p. 69, say that for $\gamma\in SL_2(\mathbb Z)$:
>
> (a) If $\gamma$ has order $3$, then $\gamma$ is conjugate in $SL_2(\mathbb Z)$ to
> $$
> \begin{pmatrix}0&1\\-1&-1\end{pmatrix}^{\pm1}.
> $$
>
> (b) If $\gamma$ has order $4$, then $\gamma$ is conjugate in $SL_2(\mathbb Z)$ to
> $$
> \begin{pmatrix}0&-1\\1&0\end{pmatrix}^{\pm1}.
> $$
> The exponent $\pm1$ allows either the displayed matrix or its inverse; it does not mean multiplication by $\pm1$.

## Hints

> [!hint]- Hint 1
> (a) Express the standard basis vectors as integer combinations of $u,v$. This gives an integer right inverse of $[u\ v]$.

> [!hint]- Hint 2
> (b) Let $i$ act on $\mathbb Z^2$ by a matrix of exact order $4$, or let $\omega=e^{2\pi i/3}$ act by a matrix of exact order $3$. Establish the corresponding quadratic polynomial relation first.

> [!hint]- Hint 3
> Show that the resulting module over $\mathbb Z[i]$ or $\mathbb Z[\omega]$ is torsion-free. These rings are Euclidean for the complex norm, so the finitely generated torsion-free module theorem makes the module free of rank $1$.

> [!hint]- Hint 4
> A generator over the quadratic ring supplies an integral basis. If its determinant is $-1$, exchange the two basis vectors; this replaces the normal form by its inverse. The original appendix also suggests using the source's six-order classification for $-\gamma$ when $\gamma$ has order $3$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation of both assigned parts. The named algebraic input is the finitely generated torsion-free module theorem over a PID; the Euclidean properties needed to apply it are proved below.
>
> **(a) An integer inverse.** Put $P=[u\ v]$. Since the columns generate $L=\mathbb Z^2$, there are integer columns $q_1,q_2$ with $Pq_1=e_1$ and $Pq_2=e_2$. Consequently
> $$
> Q=[q_1\ q_2]\in M_2(\mathbb Z),\qquad
> PQ=I,\qquad
> \det P\det Q=1.
> $$
> Both determinants are integers, so $\det P=\pm1$.
>
> **(b1) Polynomial relations for the two orders.** For any determinant-one two-by-two matrix, the Cayley–Hamilton identity is
> $$
> \gamma^2-(\operatorname{tr}\gamma)\gamma+I=0. \tag{1}
> $$
> We first recall the unique-involution argument: if $\delta^2=I$ and $\det\delta=1$, equation (1) gives $(\operatorname{tr}\delta)\delta=2I$. The trace cannot vanish; hence $\delta$ is scalar, and its determinant makes it $I$ or $-I$.
>
> If $\gamma$ has exact order $4$, its square has exact order $2$, so
> $$
> \gamma^2=-I. \tag{2}
> $$
> If $\gamma$ has exact order $3$, we claim that $\gamma-I$ is invertible over $\mathbb Q$. Otherwise,
> $$
> 0=\det(\gamma-I)=2-\operatorname{tr}\gamma,
> $$
> and (1) gives $(\gamma-I)^2=0$. Writing $N=\gamma-I$ would then yield
> $$
> \gamma^3=(I+N)^3=I+3N=I.
> $$
> Thus $N=0$ in characteristic zero and $\gamma=I$, contrary to exact order $3$. The factorization
> $$
> (\gamma-I)(\gamma^2+\gamma+I)=\gamma^3-I=0
> $$
> therefore gives
> $$
> \gamma^2+\gamma+I=0. \tag{3}
> $$
>
> **(b2) The two coefficient rings are Euclidean.** Let $\omega=e^{2\pi i/3}$ and set
> $$
> R_4=\mathbb Z[i],\qquad R_3=\mathbb Z[\omega].
> $$
> Their norms are
> $$
> |a+bi|^2=a^2+b^2,\qquad
> |a+b\omega|^2=a^2-ab+b^2.
> $$
> Given $\alpha,\beta$ in one of these rings with $\beta\ne0$, write $\alpha/\beta=x+y\eta$ with $x,y\in\mathbb R$ and $\eta=i$ or $\omega$. Choose integers $m,n$ satisfying $|x-m|,|y-n|\le1/2$, and put $q=m+n\eta$. With $u=x-m,v=y-n$,
> $$
> |u+vi|^2\le\frac12<1,\qquad
> |u+v\omega|^2
> \le u^2+|uv|+v^2\le\frac34<1.
> $$
> The remainder $r=\alpha-q\beta$ therefore has $|r|^2<|\beta|^2$. The squared norm takes nonnegative integer values on each ring and is multiplicative, proving the Euclidean property. A nonzero ideal is principal by choosing a nonzero member of smallest norm and dividing every other member by it: the remainder lies in the same ideal and must vanish. Thus both rings are PIDs.
>
> **(b3) A free module of rank one.** In the order-$4$ case, equation (2) defines an $R_4$-module structure on $L$ by $i\cdot w=\gamma w$. In the order-$3$ case, equation (3) defines an $R_3$-module structure by $\omega\cdot w=\gamma w$. The usual two integer basis vectors generate $L$ over either ring.
>
> The module is torsion-free. In the order-$4$ case,
> $$
> (aI+b\gamma)(aI-b\gamma)=(a^2+b^2)I.
> $$
> In the order-$3$ case, equation (3) gives
> $$
> (aI+b\gamma)((a-b)I-b\gamma)
> =(a^2-ab+b^2)I.
> $$
> For a nonzero scalar $a+b\eta$, the integer norm on the right is positive. If that scalar annihilates $w\in L$, multiplication by its conjugate annihilates $w$ by a positive integer, so $w=0$ because $\mathbb Z^2$ is torsion-free as an abelian group.
>
> The **finitely generated torsion-free module theorem over a PID** now gives $L\simeq R_j^r$. Each $R_j$ is free of rank $2$ over $\mathbb Z$, whereas $L$ has rank $2$ over $\mathbb Z$. Hence $2=2r$ and $r=1$. Choose a module generator $u$.
>
> **(b4) Order $4$ and orientation.** Put $v=\gamma u$. The pair $u,v$ is an integer basis and
> $$
> \gamma[u\ v]=[v\ {-u}]=[u\ v]S,\qquad
> S=\begin{pmatrix}0&-1\\1&0\end{pmatrix}.
> $$
> By (a), $P=[u\ v]$ has determinant $\pm1$. If $\det P=1$, then $\gamma=PSP^{-1}$. If $\det P=-1$, take
> $$
> J=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad
> Q=PJ=[v\ u]\in SL_2(\mathbb Z).
> $$
> Direct multiplication gives $JSJ=S^{-1}$, so $\gamma=QS^{-1}Q^{-1}$. This proves the order-$4$ assertion with an orientation-preserving conjugating matrix.
>
> **(b5) Order $3$ and orientation.** This time put $v=-\gamma u$. Again $u,v$ is an integer basis. By (3),
> $$
> \gamma u=-v,\qquad
> \gamma v=-\gamma^2u=u+\gamma u=u-v,
> $$
> hence
> $$
> \gamma[u\ v]=[-v\ u-v]=[u\ v]A,\qquad
> A=\begin{pmatrix}0&1\\-1&-1\end{pmatrix}.
> $$
> If $\det P=1$, this is the required conjugacy to $A$. If $\det P=-1$, use $Q=PJ\in SL_2(\mathbb Z)$ and
> $$
> JAJ=\begin{pmatrix}-1&-1\\1&0\end{pmatrix}=A^{-1}.
> $$
> Therefore $\gamma=QA^{-1}Q^{-1}$, proving the order-$3$ assertion.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]
- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]
- [[02 - Ring Theory/Concepts/Principal Ideal Domains|Principal Ideal Domains]]
- [[07 - Modular Forms/Concepts/Modular Group|Modular Group]]

## Notes

- **Source status:** The complete exercise, the two referenced proposition statements, the source's order-$6$ proof, and the appendix hint were checked on rendered source pages. The proposition proves the order-$6$ case and assigns orders $3$ and $4$ here.
- **Proof provenance:** The module arguments and Euclidean norm bounds above are independent expansions. The finitely generated torsion-free module theorem over a PID is a named imported algebraic theorem, not proved in this note.
- **Alternative source method:** Appendix A, printed p. 415 / PDF p. 426, observes that the order-$4$ case uses $\mathbb Z[\gamma]\simeq\mathbb Z[i]$, and that a matrix $\gamma$ of exact order $3$ makes $-\gamma$ have exact order $6$. Applying the source's proved order-$6$ classification to $-\gamma$ also gives the two order-$3$ normal forms.
- **Hypothesis boundary:** A relation such as $\gamma^6=I$ alone does not make $\mu_6$ act by $\gamma$ on a module over $\mathbb Z[\mu_6]$; the quadratic relation must also be established. Exact order supplies it in the source's setting. The present argument explicitly establishes the relations used for orders $3$ and $4$.
- **Orientation:** A change of basis of determinant $-1$ is not an allowed conjugator in $SL_2(\mathbb Z)$. Exchanging columns repairs its determinant and changes the normal form to its inverse.
- **Routing:** The central construction is a rank-one module over a quadratic PID and its integral matrix basis.
- **Learning status:** The status remains not-started.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
