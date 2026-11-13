---
title: "Exercise LA664: Rotation Blocks for Special Orthogonal Matrices"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 1, Section 1.6, Exercise 15, printed p. 29, PDF p. 41"
source_refs:
  - "S10/ch-1/sec-6/ex-15"
created: 2026-11-12
---

# Exercise LA664: Rotation Blocks for Special Orthogonal Matrices

## Problem Statement

> [!question] Original Chapter 1, Exercise 15
> Let $R$ be an element of $SO(n)$.
>
> (a) Suppose $v\in\mathbb C^n$ is an eigenvector for $R$ with eigenvalue $\lambda\in\mathbb C$, and suppose $\lambda$ is not real. Let $V\subset\mathbb R^n$ be the two-dimensional span of $(v+\overline v)/2$ and $(v-\overline v)/(2i)$. Show that $V$ is invariant under $R$ and that the restriction of $R$ to $V$ has determinant 1.
>
> (b) Suppose that a subspace $V\subset\mathbb R^n$ is invariant under both $R$ and $R^{-1}$. Show that the orthogonal complement $V^\perp$ of $V$ is also invariant under both $R$ and $R^{-1}$.
>
> (c) Show that if $n=2k$, there exists $S\in SO(n)$ such that
> $$
> R=S\begin{pmatrix}
> \cos\theta_1&-\sin\theta_1&&&\\
> \sin\theta_1&\cos\theta_1&&&\\
> &&\ddots&&\\
> &&&\cos\theta_k&-\sin\theta_k\\
> &&&\sin\theta_k&\cos\theta_k
> \end{pmatrix}S^{-1}
> $$
> and that if $n=2k+1$, there exists $S\in SO(n)$ such that
> $$
> R=S\begin{pmatrix}
> \cos\theta_1&-\sin\theta_1&&&&\\
> \sin\theta_1&\cos\theta_1&&&&\\
> &&\ddots&&&\\
> &&&\cos\theta_k&-\sin\theta_k&\\
> &&&\sin\theta_k&\cos\theta_k&\\
> &&&&&1
> \end{pmatrix}S^{-1}.
> $$
> That is, in a suitable orthonormal basis, $R$ is block diagonal with $2\times2$ blocks of the indicated form, with a single $1\times1$ block if $n$ is odd.
>
> *Hint:* Show that the number of eigenvalues of $R$ equal to $-1$ is even.

## Hints

> [!hint]- Hint 1
> Write $v=x+iy$ and $\lambda=a+ib$. Compare real and imaginary parts of $Rv=\lambda v$.

> [!hint]- Hint 2
> Remove an invariant plane or a real eigenline and continue on its orthogonal complement. Pair the $-1$ eigenlines, then pair the remaining $+1$ eigenlines.

> [!hint]- Hint 3
> An orthonormal basis may initially have determinant $-1$. Reversing one basis vector makes it positively oriented and changes the sign of a rotation angle when that vector lies in a rotation block.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation. The only existence input is the Fundamental Theorem of Algebra: a positive-degree complex characteristic polynomial has a root.
>
> **(a) A nonreal eigenvalue gives a real invariant plane.** Write $v=x+iy$ with $x,y\in\mathbb R^n$ and $\lambda=a+ib$, where $b\ne0$. The vectors $x,y$ are linearly independent: otherwise $v=cw$ for a nonzero real vector $w$ and a nonzero complex scalar $c$, which would imply $Rw=\lambda w$, impossible because $Rw$ is real and $\lambda$ is nonreal. Comparing real and imaginary parts gives
> $$
> Rx=ax-by,\qquad Ry=bx+ay.
> $$
> Hence $V=\operatorname{span}_{\mathbb R}\{x,y\}$ is invariant, and in this basis
> $$
> [R|_V]_{x,y}=\begin{pmatrix}a&b\\-b&a\end{pmatrix}.
> $$
> Orthogonality gives $\|Rv\|=\|v\|$, so $|\lambda|=1$. Consequently
> $$
> \det(R|_V)=a^2+b^2=|\lambda|^2=1.
> $$
> The restriction is invertible, so $R(V)=V$ and $V$ is invariant under $R^{-1}$ as well.
>
> **(b) Orthogonal complements are invariant.** If $u\in V^\perp$ and $w\in V$, then
> $$
> \langle Ru,w\rangle=\langle u,R^{-1}w\rangle=0,\qquad
> \langle R^{-1}u,w\rangle=\langle u,Rw\rangle=0.
> $$
> Both equalities use the assumed invariance of $V$. They prove $R(V^\perp)\subseteq V^\perp$ and $R^{-1}(V^\perp)\subseteq V^\perp$.
>
> **(c) Construct the orthogonal decomposition.** Apply the following procedure to the restriction of $R$ to the remaining real invariant orthogonal complement. If that complement has positive dimension, its complexified restriction has an eigenvalue. If an eigenvalue is nonreal, part (a) supplies a two-dimensional real invariant plane, with determinant one. If an eigenvalue is real, it is $+1$ or $-1$, because $R$ preserves norms. A nonzero real eigenvector exists by taking a nonzero real or imaginary part of a complex eigenvector, and supplies a real invariant line. In either case the selected subspace is invariant under the inverse, so part (b) allows the procedure to continue on its orthogonal complement. The dimension decreases at each step, and therefore this constructs an orthogonal direct sum of invariant planes and invariant real lines.
>
> On each selected plane the restriction is an orthogonal $2\times2$ matrix of determinant one. If its first column in an orthonormal basis is $(\cos\theta,\sin\theta)^{\mathsf T}$, orthogonality and determinant one force its second column to be $(-\sin\theta,\cos\theta)^{\mathsf T}$. Thus every such restriction is a rotation block
> $$
> Q(\theta)=\begin{pmatrix}\cos\theta&-\sin\theta\\
> \sin\theta&\cos\theta\end{pmatrix}.
> $$
> The remaining line blocks are $+1$ and $-1$. If there are $m_-$ negative line blocks, then
> $$
> 1=\det R=(-1)^{m_-},
> $$
> since every plane block has determinant one. Thus $m_-$ is even. Pair the negative line blocks: each pair is $-I_2=Q(\pi)$. Pair the positive line blocks: each pair is $I_2=Q(0)$. There are an even number of positive line blocks when $n$ is even, and an odd number when $n$ is odd, because the plane blocks and the negative line blocks together have even dimension. Hence exactly one $+1$ line remains in odd dimension. This gives the stated block matrix $B$ and an orthogonal matrix $S_0$ with $R=S_0BS_0^{-1}$.
>
> It remains to obtain $S\in SO(n)$. If $\det S_0=1$, take $S=S_0$. If $\det S_0=-1$ and $n\ge2$, let $D=\operatorname{diag}(-1,1,\ldots,1)$ and put $S=S_0D$. Then $\det S=1$ and
> $$
> R=S(DBD)S^{-1}.
> $$
> Conjugation by $D$ replaces the first rotation block $Q(\theta_1)$ by $Q(-\theta_1)$ and leaves every other block unchanged. Thus $DBD$ still has the required form. For $n=1$, the only matrix in $SO(1)$ is $(1)$ and one takes $S=(1)$ directly.
>
> For example, $\operatorname{diag}(-1,-1,1)$ has the required odd-dimensional form $Q(\pi)\oplus(1)$. A single unpaired $-1$ line would have determinant $-1$ and is excluded.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- **Source status:** All three parts, both block formulas, and the printed hint were checked on the original 200 dpi page image. The proof above is independently supplied.
- **Orientation boundary:** Constructing an orthonormal basis initially gives only $S_0\in O(n)$. The final orientation adjustment is needed for the printed requirement $S\in SO(n)$; the signs of the angles may change in that adjustment.
- **Method boundary:** This argument proves the needed real orthogonal block decomposition directly. It does not assume the full spectral theorem as a black box.
- **Related exercise:** [[04 - Linear Algebra and Modules/Exercises/Exercise LA663 - The Axis of a Three Dimensional Rotation|Exercise LA663]] treats dimension three.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
