"""empty message

Revision ID: e23540f60e1c
Revises: 12a1cb129d38
Create Date: 2023-01-26 18:17:46.692746

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e23540f60e1c'
down_revision = '12a1cb129d38'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('unirseevento',
    sa.Column('event_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=True),
    sa.ForeignKeyConstraint(['event_id'], ['crearevento.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('event_id', 'user_id')
    )
    op.alter_column('crearevento', 'publicooprivado',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
    op.drop_constraint('crearevento_publicooprivado_key', 'crearevento', type_='unique')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint('crearevento_publicooprivado_key', 'crearevento', ['publicooprivado'])
    op.alter_column('crearevento', 'publicooprivado',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
    op.drop_table('unirseevento')
    # ### end Alembic commands ###
